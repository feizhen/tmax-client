import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { TmaxSidenavService } from '@tmax/layouts/components/sidenav/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'tmax-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class TmaxToolbarComponent implements OnInit, OnDestroy {
    private _drawer: MatDrawer;
    private _drawerSubscription: Subscription;

    constructor(private _sidenavService: TmaxSidenavService) {}

    ngOnInit() {
        this._drawerSubscription = this._sidenavService.drawer.subscribe((_drawer) => {
            this._drawer = _drawer;
        });
    }

    /**
     * clean subscription when component destroy
     */
    ngOnDestroy() {
        this._drawerSubscription.unsubscribe();
    }

    toggleSidenav() {
        this._drawer && this._drawer.toggle();
    }
}
