import {Component} from '@angular/core';
import {NaviService} from './navi.service';
import {NaviComponent} from './navi.component';

@Component({
    selector: 'ss-navi-sub',
    template: `
        <div *ngFor="let item of navi[curNaviIdx[0]].sub; let i = index" 
            (click)="onNavi(1, i)" 
            [class.is-active]="i == curNaviIdx[1]">

            <a href="/{{navi[curNaviIdx[0]].page}}/{{item.page}}">{{item.name}}</a>
        </div>
    `

})

export class NaviSubComponent extends NaviComponent {
    constructor(private _naviService: NaviService) {
        // undescore because extended, will throw "separate declarations" error otherwise
        super(_naviService);
    }
}