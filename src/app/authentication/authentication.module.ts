import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history/history.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { AllhistoryComponent } from './components/allhistory/allhistory.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InformationComponent } from './components/information/information.component';
import { OrderitemComponent } from './components/orderitem/orderitem.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [HistoryComponent, AllhistoryComponent, InformationComponent, OrderitemComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,HttpClientModule,Ng2SearchPipeModule
  ]
})
export class AuthenticationModule { }
