import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRouting } from './app.routing';
import { SharedsModule } from './shareds/shareds.module';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    SharedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
