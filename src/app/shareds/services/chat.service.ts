import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { environment } from 'src/environments/environment';

import { AlertService } from './alert.service';

export interface Message {
  data: string;
  //message: string,
 
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  public messages: Subject<Message>;
  constructor(private wsService: WebsocketService,private alert: AlertService,) {
    this.messages = <Subject<Message>> wsService
    .connect(environment.CHAT_URL)
    .map((response: MessageEvent): Message => {
      let data = JSON.parse(response.data);
      // alert(data);
      // console.warn('---------');
      // console.warn(data);
      // console.warn('---------');
      this.alert.notify('คุณ '+ data.first_name  +' Ringing ' + ' res from : ' + data.res_from);
      return{
        data: data,
        //message: data.message
      }
    })
   }
}
