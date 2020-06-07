import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home.component';

const homePageRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
];

@NgModule({
    declarations: [HomePageComponent],
    imports: [RouterModule.forChild(homePageRoutes)],
})
export class HomePageModule {}
