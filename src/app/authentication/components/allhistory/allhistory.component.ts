import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';
import { Router } from '@angular/router';
import { AuthURL } from '../../authentication.url';
import { AppURL } from 'src/app/app.url';

@Component({
  selector: 'app-allhistory',
  templateUrl: './allhistory.component.html',
  styleUrls: ['./allhistory.component.css'],
  providers: [WebsocketService, ChatService]
})
export class AllhistoryComponent implements OnInit {
  searchText;
  allhistory: any[] = [];
  constructor(private http: HttpClient,private chatService: ChatService, private router: Router) {
    http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_history/'+localStorage.getItem('extension')+'/1/10').subscribe(result => {
      this.allhistory = result.data_page;
      console.log(JSON.stringify(this.allhistory));
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
