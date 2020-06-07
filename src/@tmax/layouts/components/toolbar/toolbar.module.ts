import { NgModule } from '@angular/core';
import { TmaxSharedModule } from '@tmax/shared.module';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TmaxToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [TmaxToolbarComponent],
    imports: [TmaxSharedModule, MatToolbarModule, MatButtonModule, MatIconModule],
    exports: [TmaxToolbarComponent],
})
export class TmaxToolbarModule {}
