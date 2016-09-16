
import { Injectable } from '@angular/core';
import { CONF } from 'local/conf';

//import {TEST} from  'test';

@Injectable()
export class NaviService {


    navi: any[] = []; // Array with navigation structure
    curNaviIdx: number[] = [0, 0]; // = [parent-index, child-index] Default navi index first child of first parent
    linkRoot: string;


    constructor() {
        this.navi = CONF.navi;
        this.linkRoot = (CONF.siteroot + '/').replace(/(\/+)/g, '/');

        console.log("linkRoot: "+this.linkRoot);

    }

    // Assign navi index when accessing path directly or on page reload
    naviByUrl() {

        var path = window.location.hash.split('/');
        // Find navi array index by page name
        this.curNaviIdx[0] = (path[1]) ? this.navi.map(function (e) { return e.page; }).indexOf(path[1]) : 0;
        this.curNaviIdx[1] = (path[2]) ? this.navi[this.curNaviIdx[0]].sub.map(function (e) { return e.page; }).indexOf(path[2]) : 0;
    }

    getSubNavi() {
        return this.navi[this.curNaviIdx[0]].sub;
    }

    setNaviIdx(naviIdx: number[]) {
        this.curNaviIdx = naviIdx;
    }
}
