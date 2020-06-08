import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TmaxModule } from '@tmax/tmax.module';
import { TmaxSharedModule } from '@tmax/shared.module';

import { TmaxConfigService } from '@tmax/services/config.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, TmaxModule, TmaxSharedModule],
    providers: [TmaxConfigService],
    bootstrap: [AppComponent],
})
export class AppModule {}
