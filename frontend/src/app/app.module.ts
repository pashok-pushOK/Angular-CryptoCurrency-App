import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// routes
import {AppRoutingModule} from './routes/app-routing/app-routing.module';

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
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
