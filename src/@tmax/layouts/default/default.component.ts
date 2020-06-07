import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TmaxSidenavService } from '@tmax/layouts/components/sidenav/sidenav.service';

@Component({
    selector: 'tmax-default-layout',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
})
export class TmaxDefaultLayoutComponent implements AfterViewInit {
    isLightTheme: boolean = true;

    @ViewChild('drawer') drawer;

    ngAfterViewInit() {
        this._sidenavService.setDrawer(this.drawer);
    }

    constructor(private _sidenavService: TmaxSidenavService) {}
}
