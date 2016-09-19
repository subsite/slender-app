import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpModule, JsonpModule }  from '@angular/http';
import { APP_BASE_HREF, PathLocationStrategy, LocationStrategy } from '@angular/common';

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
        { provide: APP_BASE_HREF, useValue: '/' },
        {provide: LocationStrategy, useClass: PathLocationStrategy}
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
