import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TmaxContentComponent } from './content.component';

@NgModule({
    declarations: [TmaxContentComponent],
    imports: [RouterModule],
    exports: [TmaxContentComponent],
})
export class TmaxContentModule {}
