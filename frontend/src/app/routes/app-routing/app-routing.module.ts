import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../../home/home.component';
import {CryptoItemPageComponent} from '../../crypto-item-page/crypto-item-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'crypto-item/:name',
        component: CryptoItemPageComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
