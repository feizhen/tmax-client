import { MatDrawerMode } from '@angular/material/sidenav';

export type TmaxLayout = 'default' | 'plain';

export type TmaxTheme = 'light' | 'dark';

export interface TmaxConfig {
    layout: TmaxLayout;
    theme: TmaxTheme;
    sidenav: {
        drawer: {
            mode: MatDrawerMode;
            opened: boolean;
        };
    };
}
