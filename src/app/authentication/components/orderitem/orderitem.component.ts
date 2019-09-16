import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css'],
  providers: [WebsocketService, ChatService]
})

export class OrderitemComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  searchText;
  orderitem: any = [];
  constructor(private chatService: ChatService,private http: HttpClient, private router: Router) { 
    
    this.subscription = chatService.messages.subscribe(data => {
      console.log("Response From Websocket Server:" + data);
      console.log(data.data);

    })

      //ดึงข้อมูลจากใบสั่งซื้อ
    http.get<any>('http://api.ipphone.kratos.co.th:8080/api/purchase/order/item/' + localStorage.getItem('OrderId') ).subscribe(result => {
      this.orderitem = result;
      console.log(JSON.stringify(this.orderitem));
    });
  }
  public ngOnDestroy(): void {
    console.warn('message from ngOnDestroy in allhistory')
    if (this.subscription) this.subscription.unsubscribe();
    // if (this.subscription) this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

  OnBack(item: any) {
    this.router.navigate(['',
      AppURL.Authen,
      AuthURL.Information,
      localStorage.getItem('PhoneClick')
    ]);
    
  }

}
