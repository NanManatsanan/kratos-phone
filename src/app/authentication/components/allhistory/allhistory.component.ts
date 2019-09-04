import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';

@Component({
  selector: 'app-allhistory',
  templateUrl: './allhistory.component.html',
  styleUrls: ['./allhistory.component.css'],
  providers: [WebsocketService, ChatService]
})
export class AllhistoryComponent implements OnInit {

  allhistory: any[] = [];
  constructor(private http: HttpClient,private chatService: ChatService) {
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

  ngOnInit() {
  }

}
