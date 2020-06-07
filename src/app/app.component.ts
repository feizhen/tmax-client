import { Component, OnInit } from '@angular/core';

import { TmaxConfigService } from '@tmax/services/config.service';

import { TmaxThemeType } from '@tmax/types/tmax-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isLightTheme: boolean;

    ngOnInit() {
        this._tmaxConfigSerivce.config.subscribe((_config) => {
            this.isLightTheme = _config.theme === 'light';
        });
    }

    constructor(private _tmaxConfigSerivce: TmaxConfigService) {}
}
