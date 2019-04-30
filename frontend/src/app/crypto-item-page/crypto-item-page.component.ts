import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CryptoItemsService} from "../service/crypto-items.service";

@Component({
    selector: 'app-crypto-item-page',
    templateUrl: './crypto-item-page.component.html',
    styleUrls: ['./crypto-item-page.component.sass']
})
export class CryptoItemPageComponent implements OnInit {

    public routeName;
    public routeSymbol;
    public routeId;
    public item;
    public isLoaded: boolean = false;

    constructor(
        private cryptoItemService: CryptoItemsService,
        private route: ActivatedRoute
    ) {
        this.routeName = this.route.snapshot.paramMap.get('name');
        this.routeSymbol = this.route.snapshot.paramMap.get('symbol');
        this.routeId = this.route.snapshot.paramMap.get('id');
    }

    public isDataFetched(data): void {
        this.item = data;
        this.isLoaded = true;

        console.log(data);
    }

    public fetchItemData(): void {
        this.cryptoItemService.getCryptoItem(this.routeName, this.routeSymbol, this.routeId)
            .subscribe(res => {
                this.isDataFetched(res.data.data);
            });
    }

    ngOnInit() {
        this.fetchItemData();
    }

}
