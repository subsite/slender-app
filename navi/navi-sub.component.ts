import {Component, OnInit} from '@angular/core';
import {NaviService} from './navi.service';
import {NaviComponent} from './navi.component';

@Component({
    selector: 'ss-navi-sub',
    templateUrl: 'local/templates/navi-sub.template.html'

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