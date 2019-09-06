import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css'],
  providers: [WebsocketService, ChatService]
})

export class OrderitemComponent implements OnInit {

  orderitem: any = [];
  constructor(private chatService: ChatService,private http: HttpClient) { 
    
      chatService.messages.subscribe(msg => {
        console.log("Response From Websocket Server:" + msg);
        console.log(msg);
        //alert(msg);
      })

      //ดึงข้อมูลจากใบสั่งซื้อ
    http.get<any>('http://api.ipphone.kratos.co.th:8080/api/purchase/order/item/' + localStorage.getItem('OrderId') ).subscribe(result => {
      this.orderitem = result;
      console.log(JSON.stringify(this.orderitem));
    });
  }

  ngOnInit() {
  }

}
