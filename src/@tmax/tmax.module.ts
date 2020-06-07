import { NgModule } from '@angular/core';

import { TmaxSharedModule } from './shared.module';
import { TmaxLayoutModule } from '@tmax/layouts/layout.module';

// service
import { TmaxConfigService } from '@tmax/services/config.service';

@NgModule({
    providers: [TmaxConfigService],
    imports: [TmaxLayoutModule, TmaxSharedModule],
    exports: [TmaxLayoutModule],
})
export class TmaxModule {}
