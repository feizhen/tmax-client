import { Component, OnInit } from '@angular/core';

import { TmaxConfigService } from '@tmax/services/config.service';
import { TmaxConfig } from '@tmax/types/tmax-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // isLightTheme: boolean;

    tmaxConfig: TmaxConfig;

    ngOnInit() {
        this._tmaxConfigSerivce.config.subscribe((_config) => {
            this.tmaxConfig = _config;
        });
    }

    constructor(private _tmaxConfigSerivce: TmaxConfigService) {}
}
