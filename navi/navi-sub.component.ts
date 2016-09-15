import {Component, OnInit} from '@angular/core';
import {NaviService} from './navi.service';
import {NaviComponent} from './navi.component';

@Component({
    selector: 'ss-navi-sub',
    template: `
        <div *ngFor="let item of getNavi(); let i = index">

            <a routerLink="/{{navi[this.naviService.curNaviIdx[0]].page}}/{{item.page}}" routerLinkActive="is-active">{{item.name}}</a>
        </div>{{foosub}}
    `

})

export class NaviSubComponent extends NaviComponent {
    constructor(private _naviService: NaviService) {
        // undescore because extended, will throw "separate declarations" error otherwise
        super(_naviService);
    }
    
    getNavi() {
        return this._naviService.getSubNavi();
    }
}