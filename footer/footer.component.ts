import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'ss-footer',
    templateUrl: 'local/templates/footer.template.html'
})

export class FooterComponent implements OnInit {

    private version: string;
    private ngVersion: string;

    constructor(private http: Http) { }

    ngOnInit() {


        this.http.get('./package.json')
            .map(res => res.json())
            .subscribe(data => {
                this.version = data.version;
                this.ngVersion = data.dependencies['@angular/common'];
            });
    }



}