import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css'],
  providers: [WebsocketService, ChatService]
})
export class OrderitemComponent implements OnInit {

  constructor(private chatService: ChatService) { 
    
      chatService.messages.subscribe(msg => {
        console.log("Response From Websocket Server:" + msg);
        console.log(msg);
        //alert(msg);
      })
  }

  ngOnInit() {
  }

}
