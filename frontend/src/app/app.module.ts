import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {
    MatTooltipModule
} from '@angular/material';

// routes
import {AppRoutingModule} from './routes/app-routing/app-routing.module';

// components
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { CryptoItemComponent } from './crypto-item/crypto-item.component';
import { CryptoItemPageComponent } from './crypto-item-page/crypto-item-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CryptoItemComponent,
        CryptoItemPageComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
