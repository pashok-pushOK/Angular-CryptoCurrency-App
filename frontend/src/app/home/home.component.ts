import {Component, OnInit} from '@angular/core';

import {CryptoItemsService} from "../service/crypto-items.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    public items: any = [];

    constructor(
        private cryptoItemsService: CryptoItemsService
    ) {
    }

    fetchData(): void {
        this.items = this.cryptoItemsService.getCryptoData();
        console.log(this.items);
    }

    ngOnInit() {
        this.fetchData();
    }

}
