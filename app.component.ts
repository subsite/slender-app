import { Component } from '@angular/core';


import {CONF} from './conf';


import 'rxjs/Rx';

@Component({
    selector: 'ss-app',
    templateUrl: './app/app.html',
    providers: []
})

export class AppComponent { }


/*

import {NaviService} from './navi/navi.service';

@Component({
    selector: 'ss-app',
    templateUrl: './app/app.html',
    directives: [
        ROUTER_DIRECTIVES,
        NaviComponent,
        NaviSubComponent,
        FooterComponent
    ],
    providers: [
        NaviService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}), // Use hash for now, direct access produces 404 with non-hashbang paths
        provide(APP_BASE_HREF, {useValue : '/'})  // replaces router base <base href="/"> 
            
    ]
})


export class AppComponent {

    constructor(private naviService: NaviService) { }

    ngOnInit() {
        this.naviService.naviByUrl();
    }
  
}*/
