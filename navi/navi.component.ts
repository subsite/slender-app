import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {NaviService} from './navi.service';

@Component({
    selector: 'ss-navi',
    templateUrl: 'local/templates/navi.template.html'
})

export class NaviComponent implements OnInit {
    navi: any;
    linkRoot: string;
    curNaviIdx: number[];
    paths: any = {};
   

    constructor(
        private naviService: NaviService) { }

    ngOnInit() {

        this.navi = this.naviService.navi;
        this.curNaviIdx = this.naviService.curNaviIdx;

    }

    getNavi() {
        return this.navi;
    }

}

