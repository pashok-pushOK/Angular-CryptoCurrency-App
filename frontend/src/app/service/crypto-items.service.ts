import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface CryptoData {
    data: object;
}

@Injectable({
    providedIn: 'root'
})
export class CryptoItemsService {

    public domain: string = 'http://localhost/';
    public apiUrl: string = 'fetchData/cryptoItems';
    public items: any = [];

    constructor(
        private http: HttpClient
    ) {
    }

    public getCryptoData() {
        // return this.http.get<CryptoData>(`${this.domain}${this.apiUrl}`)
        //     .subscribe(res => {
        //         this.items = res.data;
        //     });
    }
}
