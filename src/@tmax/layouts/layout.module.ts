import { NgModule } from '@angular/core';
import { TmaxDefaultLayoutModule } from './default/default.module';

@NgModule({
    imports: [TmaxDefaultLayoutModule],
    exports: [TmaxDefaultLayoutModule],
})
export class TmaxLayoutModule {}
