import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class HttpsService{
    constructor( private http: HttpClient){
        this.http.get('http://nodereddev.kratos.co.th:1880/sniffer/get_top10/200').subscribe(res => console.log(res));
    }
}