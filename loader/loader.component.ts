import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {LoaderService} from './loader.service';
import { CONF } from '../../local/conf';

declare let ga:Function;
declare let foo:Function;

@Component({
    template:`<div [innerHTML]="parsedMd"></div>`,
    selector: 'ss-loader',
    providers: [LoaderService]
})

export class LoaderComponent implements OnInit {

    mdUrl: string;
    parsedMd: string = '';


    constructor(
        private route: ActivatedRoute,
        private loaderService: LoaderService) {

    }

    ngOnInit() {
       // console.log("loader init");

        this.route.params.subscribe(urlParams => {
            
            
            // send url to google analytics
            if (CONF.gaTrackingId 
                && CONF.gaDomains 
                && CONF.gaDomains.indexOf(window.location.hostname) != -1) {

                    ga('create', CONF.gaTrackingId, 'auto'); 
                    ga('set', 'page', location.href);
                    ga('send', 'pageview');
                    console.log("ga create:"+CONF.gaTrackingId+' send:'+location.pathname);
            }
            

            this.mdUrl = this.loaderService.getPageUrl(urlParams);

            this.loaderService.getFile(this.mdUrl)
                .subscribe(data => {
                    this.parsedMd = this.loaderService.markUp(data);
                    
            });

            
        });


        // Get page url from service       
        //this.mdUrl = this.loaderService.getPageUrl();
        // Get file from service and parse it
        
    }

}