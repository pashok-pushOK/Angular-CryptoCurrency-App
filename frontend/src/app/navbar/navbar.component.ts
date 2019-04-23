import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

    public theme: string = 'default-theme';

    constructor() {
    }

    public toggleBodyTheme(theme): void {

        document.getElementById('main').classList.remove(this.theme);
        document.getElementById('main').classList.add(theme);
        this.theme = theme;
    }

    ngOnInit() {
    }

}
