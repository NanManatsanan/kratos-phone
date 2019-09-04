import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginTestService {
  UrlCheckAD: string;
  UrlCheckIPphone: string;
  token: string;
  header: any;
  constructor(
    private http: HttpClient
    ) {
    this.UrlCheckAD = 'https://userportalapi.kratos.co.th/';

    // ไว้ใส่ basic authen
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  // store user login ไว้
    // public DataUserLogin: IAccount= { } as any;
    // public setUserLogin(userLogin: IAccount){
    //   this.DataUserLogin.email = userLogin.email;
    //   this.DataUserLogin.password = userLogin.password;
    //   this.DataUserLogin.extension = userLogin.extension;
    //   this.DataUserLogin.phone = userLogin.phone;
    //   return this.DataUserLogin
    // }



  LoginService(model: any) {
    model.Host = 'kitchencenter.gastronomegroup.com';
    var loginWithPath = this.UrlCheckAD + 'api/ad/login';
    console.log(this.http);
    console.log('Your name is ' + model.Username);
    return this.http.post<any>(this.UrlCheckAD + 'api/ad/login', model, { headers: this.header });
  }

  CheckExtension(model: any) {
    localStorage.setItem('email', model.Username);
    this.UrlCheckIPphone = 'http://api.ipphone.kratos.co.th:8080/';
    var checkemail = this.UrlCheckIPphone + 'api/customers/telnumber/extention?email=';
    console.log(this.http);

    return this.http.get<any>(this.UrlCheckIPphone + 'api/customers/telnumber/extention?email=' + model.Username)
  }

}

export interface IAccount {
  email: string;
  password: string;
  phone?:string;
  extension?: string;
}