import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {NaviService} from './navi.service';

@Component({
    selector: 'ss-navi',
    template: `
        <div *ngFor="let item of getNavi(); let i = index">
            
            <a routerLink="/{{item.page}}/{{item.sub[0].page}}" routerLinkActive="is-active">{{item.name}}</a>
        </div>
    `
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
        this.linkRoot = this.naviService.linkRoot;
        this.curNaviIdx = this.naviService.curNaviIdx;

    }

    getNavi() {
        return this.navi;
    }

}

