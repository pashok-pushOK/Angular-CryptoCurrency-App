import {Component, OnInit} from '@angular/core';

import {CryptoItemsService} from "../service/crypto-items.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    public items: any = [];
    public isFetchedData: boolean = false;

    constructor(
        private cryptoItemsService: CryptoItemsService
    ) {
    }

    public onFetchedData(data): void {
        this.isFetchedData = true;
        this.items = data.data.data;
    }

    public fetchData(): void {
        this.cryptoItemsService.getCryptoData()
            .subscribe(res => {
                this.onFetchedData(res);
            });
    }

    ngOnInit() {
        this.fetchData();
    }

}
