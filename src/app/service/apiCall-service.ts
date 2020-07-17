import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const serverUrl = "http://localhost:4300/"
@Injectable()

export class Apiservice {

    constructor(private http: HttpClient) { }

    get(apiName: String, isAuth?: any, params?: any): Observable<any> {
        const apiUrl = serverUrl + apiName
        console.log(apiUrl)
        return this.http.get(apiUrl)
    }


}







