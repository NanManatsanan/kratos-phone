import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { ILoginComponent } from './login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { Router } from '@angular/router';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { LoginTestService } from './login-test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {

  model: any = {};
  errorMessage: string;
  constructor(
    private buider: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private account: AccountService,
    private loginService: LoginTestService
  ) {
    this.initiaCreateFormData();
  }

  clickLogin() {
    //debugger;
    this.loginService.LoginService(this.model).subscribe(
      data => {
        console.log('This form func data  :' + data);
        if (data.Result === true) {
          this.loginService.CheckExtension(this.model)
            .subscribe(dataall => {
              console.warn(dataall);
              localStorage.setItem('extension', dataall.Extension);
              localStorage.setItem('ServerURL', dataall.websocket_cfg.Server);
              localStorage.setItem('ServerPort', dataall.websocket_cfg.ServerPort);
              // localStorage.setItem('currentUser', JSON.stringify(dataall));
              this.router.navigate(["authentication/history"]);
            })
        }
        else {
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
        alert(' Username หรือ Password ไม่ถูกต้อง ');
      });


    
  }









  //-------------------------------------------------------
  Url = AppURL;
  form: FormGroup;

  //เข้าสู่ระบบ
  onSubmit(): void {
    // if (this.form.invalid)
    // return this.alert.someting_wrong();
    // this.account
    // .onLogin(this.form.value)
    // .then(res => {
    //   this.authen.setAuthenticated(res.accessToken)
    //   this.alert.notify('เข้าสู่ระบบสำเร็จ', 'info');
    //     //console.log(res);
    //     this.router.navigate(['/', AppURL.Authen, AuthURL.History]);
    // })
    // .catch(err => this.alert.notify(err.Message));

    this.account.onLogin(this.model).subscribe(
      data => {
       // debugger;
        console.log(data);
        if (data.Result = true) {
          this.account.checkExtension(this.model).subscribe(dataall => {
            console.log(dataall);
            // localStorage.setItem('extension', dataall.Extension);
            // localStorage.setItem('ServerURL', dataall.websocket_cfg.Server);
            // localStorage.setItem('ServerPort', dataall.websocket_cfg.ServerPort);
            // localStorage.setItem('currentUser', JSON.stringify(dataall));
            this.router.navigate(['/', AppURL.Authen, AuthURL.History]);
          })
        }
        else {
          this.alert.notify = data.Message;
        }
      },

      error=>{
        this.errorMessage = error.message;
        alert(' Username หรือ Password ไม่ถูกต้อง ');
      });

  }









  //สร้างฟอร์ม
  private initiaCreateFormData() {
    this.form = this.buider.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true]
    });
  }


}
