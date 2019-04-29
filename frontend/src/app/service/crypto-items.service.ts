import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CryptoItem} from "../crypto-item";

export interface SingleCryptoItem {
    data: {
        data: {
            category: string;
            description: string;
            id: number;
            logo: string;
            name: string;
            symbol: string;
            tags: [];
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class CryptoItemsService {

    public domain: string = 'http://localhost/';
    public apiUrl: string = 'fetchData/cryptoItems';
    public apiItemUrl: string = 'fetchData/cryptoItem';

    constructor(
        private http: HttpClient
    ) {
    }

    // get crypto currency item by name
    public getCryptoItem(name, symbol, id) {
        return this.http.get<SingleCryptoItem>(`${this.domain}${this.apiItemUrl}/${name}/${symbol}/${id}`);
    }

    // get top 10 crypto currencies
    public getCryptoData() {
        return this.http.get<CryptoItem>(`${this.domain}${this.apiUrl}`)
    }
}
