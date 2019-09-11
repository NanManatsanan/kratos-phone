import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { IAuthSidebarComponent } from './auth.sidebar.interface';
//import { IAccount, AccountService } from '../../services/account.service';
import { IAccount } from 'src/app/components/login/login-test.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { LoginTestService } from 'src/app/components/login/login-test.service';


@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements OnInit, IAuthSidebarComponent {


  constructor(
    private authen: AuthenService, private alert: AlertService,
    private router: Router, private loginService: LoginTestService
  ) {
    this.initialLoadUserLogin();

  }

  ngOnInit() {
    this.ShowEmail()
    this.ShowPicture()
  }


  AppURL = AppURL;
  AuthURL = AuthURL;
  //UserLogin: IAccount;
  Logintest: LoginTestService;

  //โหลดข้อมูล User ที่เข้าสู้ระบบ จาก Token
  private initialLoadUserLogin() {
    //this.account
    //.getUserLogin(this.authen.getAuthenticated())
    // .then(userLogin => this.UserLogin = userLogin)
    // .catch(err => {
    //     this.alert.notify(err.Message);
    //this.authen.clearAuthenticated();
    //     this.router.navigate(['/', AppURL.Login]);
    // });
  }

  ShowInSideBar() {
    var sidebarEmail = localStorage.getItem('email');
    console.error(sidebarEmail);


    var para = document.createElement("p");
    var node = document.createTextNode(sidebarEmail);
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
  }

  ShowEmail() {
    var showEmail = localStorage.getItem('email');
    var para = document.createElement("p");
    var node = document.createTextNode(showEmail);
    para.appendChild(node);
    var element = document.getElementById("ShowFromLocalStorage_email");
    element.appendChild(para);
    
  }

  ShowPicture() {
  }

}
