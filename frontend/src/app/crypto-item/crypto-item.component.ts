import {Component, Input, OnInit} from '@angular/core';

import {CryptoItem} from "../crypto-item";

@Component({
    selector: 'app-crypto-item',
    templateUrl: './crypto-item.component.html',
    styleUrls: ['./crypto-item.component.sass']
})
export class CryptoItemComponent implements OnInit {

    @Input() listCryptoItem: CryptoItem;

    constructor() {
    }

    ngOnInit() {
    }

}
