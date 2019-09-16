import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history/history.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { AllhistoryComponent } from './components/allhistory/allhistory.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InformationComponent } from './components/information/information.component';
import { OrderitemComponent } from './components/orderitem/orderitem.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChatService } from '../shareds/services/chat.service';




@NgModule({
  declarations: [HistoryComponent, AllhistoryComponent, InformationComponent, OrderitemComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,HttpClientModule,Ng2SearchPipeModule
  ]
  
})


export class AuthenticationModule {
   history: any[] = [];
  constructor(private http: HttpClient, private chatService: ChatService ) {

    // chatService.messages.subscribe(data => {
    //   console.log("Response From Websocket Server:" + data);
    //   console.log(data);
      
    // })

//     http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_top10/' + localStorage.getItem('extension'))
//     .subscribe(
//       result => {

//         this.history = result.data_page;
        
//         this.chatService.empList.push(result.data_page);
        
//         console.log(result.data_page);

        
//       });
// chatService.messages.subscribe(data => {
      
//       console.log("Response From Websocket Server:" + data);
//            if(data !== undefined){
//         console.log(data.data);
//       http.get<any>('http://nodereddev.kratos.co.th:1880/sniffer/get_top10/' + localStorage.getItem('extension'))
//       .subscribe(
//         result => {
//       this.history = result.data_page;
//       this.chatService.empList.push(result.data_page);
//         });
//       this.history.splice(0,0,data);
     
//      }
//     })
    
 }
}
