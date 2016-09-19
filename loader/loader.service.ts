import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {NaviService} from '../navi/navi.service';

import { CONF } from 'local/conf';


declare var marked: any; // marked.js

@Injectable()
export class LoaderService {

    private navi: any;
    private parent: any;
    private child: any;
    private pageHeader: any = '';

    constructor(
        private http: Http, 
        private naviService: NaviService) { 
            
            this.navi = CONF.navi;
            
        }

    getPageUrl(urlObj) {


        let naviIdx = (this.getNaviIdx(urlObj));
        //console.log(naviIdx);

        this.parent = this.navi[naviIdx[0]];
        this.child = this.parent.sub[naviIdx[1]];
               
        //var defaultUrl = window.location.pathname + '/local/content/pages/' + this.parent.page + '/' + this.child.page + '.md'; 
        var defaultUrl = '/local/content/pages/' + this.parent.page + '/' + this.child.page + '.md'; 
        console.log(defaultUrl);

        // remove possible extra slashes
        defaultUrl = defaultUrl.replace(/(\/+)/g, '/');
        
        // Return custom url if found
        var returnUrl = (this.child.custom_url) 
            ? this.child.custom_url 
            : defaultUrl

           // console.log("getPageUrl( parent / child: "+ this.parent.page + '/' + this.child.page +") naviService: "); 

        // Get optional page header for overriden urls. Maybe move this to own method.
        if (this.child.custom_url && this.child.page_as_header) {
            this.getFile(defaultUrl)
                .subscribe(mdData => this.pageHeader = this.markUp(mdData))
        }

        return returnUrl;
    }
    
    // Get markdownfile with http request
    getFile(httpUrl:string) {
        this.pageHeader = "";
        console.log("getFile("+httpUrl+")");
        return this.http.get(httpUrl)
            .map(res => this.pageHeader + res.text()) 
            .catch(this.handleError);
            
    }

    // Parse markdown file 
    markUp(md:string) {
        return (marked(md));
    }
    
    // Find array indexes of current page by navi object key
    private getNaviIdx(urlObj) {
        let naviIdx: number[] = [0,0];
        //console.log("getNaviIdx: " + JSON.stringify(urlObj));
        // Find parent index
        for (var i=0; i<this.navi.length; i++) {
            if (this.navi[i].page == urlObj.page1) {
                naviIdx[0] = i;
            }
        }
        // Find child index
        for (var i=0; i<this.navi[naviIdx[0]].sub.length; i++) {
            if (this.navi[naviIdx[0]].sub[i].page == urlObj.page2) {
                naviIdx[1] = i;
            }
        }
       // console.log("getNaviIdx returns: " + JSON.stringify(naviIdx));
        
        this.naviService.setNaviIdx(naviIdx);

        return naviIdx;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}