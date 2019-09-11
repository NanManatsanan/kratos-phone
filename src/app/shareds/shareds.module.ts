import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { AccountService } from './services/account.service';
// import { HttpClient } from '@angular/common/http';


import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [AuthNavbarComponent, AuthSidebarComponent, AuthContentComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule.forRoot(), HttpClientModule,

  ],
  exports: [
    AuthNavbarComponent,
    AuthSidebarComponent,
    AuthContentComponent,
    BsDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule,

  ],
  providers: [
    AlertService,
    AccountService

  ]
})
export class SharedsModule { }
