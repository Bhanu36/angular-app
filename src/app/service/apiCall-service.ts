import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class Apiservice {

    constructor(private http: HttpClient) { }

    getRestaurantData(): Observable<any> {
        return this.http.get("https://5b25e407-0934-49b1-8927-363ed2d2c6f4.mock.pstmn.io/listMenuData")
    }


}







