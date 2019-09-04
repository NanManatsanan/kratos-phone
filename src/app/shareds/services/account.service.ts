import { Injectable } from '@angular/core';
import { ILogin } from '../../components/login/login.interface';
import { promise } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AccountService {
    Url: string;
    Uri: string;
    token: string;
    header: any;
    constructor(private http: HttpClient) {

        this.Url = 'https://userportalapi.kratos.co.th/';
    
        const headerSettings: { [name: string]: string | string[]; } = {};
        this.header = new HttpHeaders(headerSettings);
      }
    [x: string]: any;

    // private mockUserItems: IAccount[] = [
    //     {
    //         id: 1,
    //         firstname: 'Admin',
    //         lastname: 'Admin',
    //         email: 'admin',
    //         password: '123456',
    //         position: 'Frontend Developer',
    //         image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
    //         created: new Date(),
    //         updated: new Date()
    //     }
    // ];

//ดึงข้อมูลผู้ที่เข้าระบบจาก Token
// getUserLogin(accessToken: string) {
//     return new Promise<IAccount>((resolve, reject) => {
//         const userLogin = this.mockUserItems.find(m => m.id == accessToken);
//         if (!userLogin) return reject({ Message: 'accessToken ไม่ถูกต้อง' });
//         resolve(userLogin);
//     });
// }


    // เข้าสู่ระบบ
    onLogin(model: ILogin) {
        // return new Promise<{accessToken: string}>((resolve, reject) => {
        //     const userLogin = this.mockUserItems.find(item => item.email == model.email && item.password == model.password);
        //     if (!userLogin) return reject({ Message: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' });
        //     resolve({accessToken: userLogin.id});
        // });
        // model.Host = 'kitchencenter.gastronomegroup.com';
        // return this.http
        // .requestPost('api/ad/login', model)
        // .toPromise() as Promise<{ accessToken: string }>;
        model.Host = 'kitchencenter.gastronomegroup.com';
    var a = this.Url + 'api/ad/login';
     console.log(this.http);
    // console.log('Your name is ' + model.Username);
    return this.http.post<any>(this.Url + 'api/ad/login', model, { headers: this.header });
      
    }
    checkExtension(model: ILogin) {
        //localStorage.setItem('email', model.Username);
        this.Uri = 'http://api.ipphone.kratos.co.th:8080/';
        var a = this.Uri + 'api/customers/telnumber/extention?email=';
        console.log(this.http);
    
    
    
    
    
      
    
        
        return  this.http.get<any>(this.Uri + 'api/customers/telnumber/extention?email=' + model.email);

    }
    

}
export interface IAccount {
    // firstname: string;
    // lastname: string;
     email: string;
    // password: string;

    Result: true,
    ResultList: string,
    Current: string,
    Max: string,
    State: string,
    Message: string,
    PortalTask: string,
    Debug: string

   
}