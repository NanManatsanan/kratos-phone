import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [WebsocketService, ChatService]
})
export class InformationComponent implements OnInit {
  information: any[] = [];

  constructor(
    private chatService: ChatService,
    private http: HttpClient
    ) { 

    chatService.messages.subscribe(msg => {
      console.log("Response From Websocket Server:" + msg);
      console.log(msg);
      //alert(msg);
    })

    http.get<any>('http://api.ipphone.kratos.co.th:8080/api/customers/telnumber?telnumber=' + localStorage.getItem('PhoneClick') ).subscribe(result => {
      this.information = result;
      console.log(JSON.stringify(this.information));
    });



  }

  ngOnInit() {
  }

}
