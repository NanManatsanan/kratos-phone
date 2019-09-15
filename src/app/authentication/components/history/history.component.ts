import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { HttpService } from 'src/app/services/http.service';
import { HttpsService } from '../../https.service';
import { WebsocketService } from 'src/app/shareds/services/websocket.service';
import { ChatService } from 'src/app/shareds/services/chat.service';
import { Router, NavigationEnd } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';
import { Observable } from 'rxjs';


declare var $: any;
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [WebsocketService, ChatService]
})

export class HistoryComponent implements OnInit {
  [x: string]: any;
  history: any[] = [];
  searchText;

  mySubscription: any;


  // history: Array<any> = [];

  constructor(private http: HttpClient, private chatService: ChatService, private router: Router) {




    http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_top10/' + localStorage.getItem('extension'))
      .subscribe(
        result => {

          // debugger;
          // this.history = result.data_page;
          this.history = result.data_page;
          // console.warn(JSON.stringify(this.history));
          this.chatService.empList.push(result.data_page);
          // This tab will event'
          console.log(result.data_page);
        });
    chatService.messages.subscribe(data => {
      
      console.log("Response From Websocket Server:" + data);
      //console.log(data.data);
      
      if(data !== undefined){
        console.log(data.data);
      http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_top10/' + localStorage.getItem('extension'))
      .subscribe(
        result => {
      this.history = result.data_page;
      this.chatService.empList.push(result.data_page);
        });
       
      // debugger;
      this.history.splice(0,0,data);
      //alert(msg);
    }
    })

    this.reFreshMe()

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };


    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }
  onh() {
    this.http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_top10/' + localStorage.getItem('extension'))
      .subscribe(
        result => {

          this.history = result.data_page;
          console.log(JSON.stringify(this.history));

          // This tab will event'
        });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  reloadWindow() {
    console.log('RELOAD----')
    this.router.navigate(['',
      AppURL.Authen,
      AuthURL.History
    ]);
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

  reFreshMe() {
    $(document).ready(
      function () {
        setInterval(function () {
          // $('#TableMe').
          // var randomnumber = Math.floor(Math.random() * 100);
          // $('#show').text(
          //   'I am getting refreshed every 3 seconds..! Random Number ==> '
          //   + randomnumber);
          // $('#TableMe').append("Hello");
          // .load(function(){
          //   this.onh
          // })
          // $('#TableMe').html('<table class="table" id="TableMe"> <thead> <tr> <th>Photo</th> <th>Name</th> <th>Phone</th> <th>Date</th> <th>Time</th> <th>Ducation</th> <th>Action</th> </tr> </thead> <tbody> <tr *ngFor="let item of history" > <td><img [src]="item.Photo" width="50px" height="50px"></td> <td>{{ item.Name }}</td> <td>{{ item.From }}</td> <td>{{ item.Date }}</td> <td>{{ item.Time }}</td> <td>{{item.Duration}}</td> <td class="text-left"> <i (click)="onInfor(item)" class="fa fa-info-circle"></i> </td> </tr> </tbody> </table>');
        }, 300);
      });

  }



}
