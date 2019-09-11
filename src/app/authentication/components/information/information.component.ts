import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [WebsocketService, ChatService]
})
export class InformationComponent implements OnInit {
  information: any = [];
  purchase: any = [];
  callhis: any = [];
  searchText;

  constructor(
    private chatService: ChatService,
    private http: HttpClient,
    private router: Router
    ) { 

    chatService.messages.subscribe(msg => {
      console.log("Response From Websocket Server:" + msg);
      console.log(msg);
      //alert(msg);
    })

    //ดึงข้อมูลลูกค้า
    http.get<any>('http://api.ipphone.kratos.co.th:8080/api/customers/telnumber?telnumber=' + localStorage.getItem('PhoneClick') ).subscribe(result => {
      this.information = result;
      console.log(JSON.stringify(this.information));
    });


    //ดึงข้อมูลการซื้อขาย
    http.get<any>('http://api.ipphone.kratos.co.th:8080/api/purchase/order?telnumber=' + localStorage.getItem('PhoneClick') ).subscribe(result => {
      this.purchase = result;
      console.log(JSON.stringify(this.purchase));
    });

    //ดึงข้อมูลประวัติการโทร
    http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_call_per/' + localStorage.getItem('PhoneClick') + '/' + localStorage.getItem('extension')).subscribe(result => {
    this.callhis = result.data_page;
    console.log(JSON.stringify(this.callhis));
});

  }

  ngOnInit() {
    this.clearOrderAfterSelect();
  }

  onOrder(item: any){
    this.router.navigate(['',
      AppURL.Authen,
      AuthURL.Orderitem,
      item.OrderId
    ]);
    console.log(item.OrderId);
    localStorage.setItem('OrderId', item.OrderId);
    }

    clearOrderAfterSelect() {
      localStorage.removeItem('OrderId');
    }

}
