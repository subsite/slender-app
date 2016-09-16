import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';

import { AppComponent }  from './app.component';

import { routing } from './app.routing';

import {NaviService} from './navi/navi.service';

import { LoaderComponent } from './loader/loader.component';
import { NaviComponent } from './navi/navi.component';
import { NaviSubComponent } from './navi/navi-sub.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [

        AppComponent,
        LoaderComponent,
        NaviComponent,
        NaviSubComponent,
        FooterComponent

    ],
    providers: [
        Title,
        NaviService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
