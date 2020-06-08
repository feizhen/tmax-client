import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TmaxSidenavService } from '@tmax/layouts/components/sidenav/sidenav.service';
import { TmaxConfigService } from '@tmax/services/config.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'tmax-default-layout',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
})
export class TmaxDefaultLayoutComponent implements AfterViewInit {
    sidenavDrawer;

    @ViewChild('drawer') private _drawer: MatDrawer;

    ngAfterViewInit() {
        this._sidenavService.setDrawer(this._drawer);
    }

    constructor(private _sidenavService: TmaxSidenavService, private _configService: TmaxConfigService) {
        this._configService.config.subscribe((_config) => {
            this.sidenavDrawer = _config.sidenav.drawer;
        });
    }
}
