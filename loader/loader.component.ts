import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {LoaderService} from './loader.service';
import {CONF} from 'slender-site';

@Component({
    templateUrl: './app/loader/loader.html',
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
        console.log("loader init");

        this.route.params.subscribe(urlParams => {
            //console.log(data);
            
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