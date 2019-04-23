import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CryptoItem} from "../crypto-item";

@Injectable({
    providedIn: 'root'
})
export class CryptoItemsService {

    public domain: string = 'http://localhost/';
    public apiUrl: string = 'fetchData/cryptoItems';

    constructor(
        private http: HttpClient
    ) {
    }

    public getCryptoData() {
        return this.http.get<CryptoItem>(`${this.domain}${this.apiUrl}`)
    }
}
