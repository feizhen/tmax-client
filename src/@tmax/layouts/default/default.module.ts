// modules
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TmaxSharedModule } from '@tmax/shared.module';
import { TmaxSidenavModule } from '@tmax/layouts/components/sidenav/sidenav.module';
import { TmaxToolbarModule } from '@tmax/layouts/components/toolbar/toolbar.module';
import { TmaxContentModule } from '@tmax/layouts/components/content/content.module';

// components
import { TmaxDefaultLayoutComponent } from './default.component';

// service
import { TmaxSidenavService } from '@tmax/layouts/components/sidenav/sidenav.service';

@NgModule({
    declarations: [TmaxDefaultLayoutComponent],
    imports: [MatSidenavModule, TmaxSharedModule, TmaxSidenavModule, TmaxContentModule, TmaxToolbarModule],
    exports: [TmaxDefaultLayoutComponent],
    providers: [TmaxSidenavService],
})
export class TmaxDefaultLayoutModule {}
