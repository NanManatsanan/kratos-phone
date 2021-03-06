import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { environment } from 'src/environments/environment';

import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { stringify } from '@angular/compiler/src/util';

export interface Message {
  data: string;
  //message: string,

}

@Injectable({
  providedIn: 'root'
})

export class ChatService {


  //public empList: Array<any> = [];
  public empList: Array<any> = [];
  
  public messages: Subject<Message>;
  constructor(private wsService: WebsocketService, private alert: AlertService, private router: Router) {
    this.messages = <Subject<Message>>wsService
      .connect(environment.CHAT_URL)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        // alert(data);
        // console.warn('---------');
        // console.warn(data);
        // console.warn('---------');
        if (data.from == localStorage.getItem('extension')) {
          console.log(data);
        
///empList.
          // this.alert.notify('Name : ' + data.first_name  + ' Phone : ' + stringify(data.res_from).split("@",1));
          this.alert.notify('Name : ' + data.first_name  + ' Phone : ' + stringify(data.res_from).split("@",1));
          return { data: data }
        }
      })
  }



}
