import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class AuthenService{
    // private accessKey = 'accessToken';

    // //กำหนดค่า access token  ไว้ในความจำ browser
    // setAuthenticated(accessToken: string): void{
    //     localStorage.setItem(this.accessKey, accessToken);
    // }

    // //ดึงค่า access token ในความจำ browser ออกมา
    // getAuthenticated(): string {
    //     return localStorage.getItem(this.accessKey);
    // }
    
    // //ล้างค่า access token ที่อยู่ในความจำ browser ออก
    // clearAuthenticated(): void {
    //     localStorage.removeItem(this.accessKey);
    // }
}