import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { HttpService } from 'src/app/services/http.service';
import { HttpsService } from '../../https.service';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [WebsocketService, ChatService]
})
export class HistoryComponent implements OnInit {
  history: any[] = [];
  constructor(private http: HttpClient, private chatService: ChatService, private router: Router, ) {


    http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_top10/' + localStorage.getItem('extension')).subscribe(result => {
      this.history = result.data_page;
      console.log(JSON.stringify(this.history));
    });

    chatService.messages.subscribe(msg => {
      console.log("Response From Websocket Server:" + msg);
      console.log(msg);
      //alert(msg);
    })
  }

  onInfor(item: any) {
    this.router.navigate(['',
      AppURL.Authen,
      AuthURL.Information,
      item.From
    ]);
    console.log(item.From);
    localStorage.setItem('PhoneClick', item.From);
  }

  ngOnInit() {
    this.clearPhoneAfterSelect();
  }

  clearPhoneAfterSelect() {
    localStorage.removeItem('PhoneClick');
  }

}
