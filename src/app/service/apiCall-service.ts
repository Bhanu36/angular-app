import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const serverUrl = 'http://localhost:4300';
@Injectable()
export class Apiservice {

    constructor(private http: HttpClient) { }
    get(apiName: String, isAuth?: any, params?: any): Observable<any> {
        const apiUrl = serverUrl + apiName;
        return this.http.get(apiUrl)

    }
    post(apiName: any, isAuth?: any, body?: any, loader?): Observable<any> {
        const url = serverUrl + apiName;
        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const options = { headers: header };
        return this.http.post(url, body, options);
    }

    put(apiName: String, isAuth?: any, body?: any, loader?): Observable<any> {
        const url = serverUrl + apiName;
        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const options = { headers: header };
        return this.http.put(url, body, options)
    }
    delete(apiName: String, isAuth: boolean, params): Observable<any> {
        const url = serverUrl + apiName;
        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const options = { headers: header};
        return this.http.delete(url, options);
      }

}







