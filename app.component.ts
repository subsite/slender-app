import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CONF } from '../local/conf';



import 'rxjs/Rx';

@Component({
    selector: 'ss-app',
    templateUrl: 'local/templates/app.template.html'
})

export class AppComponent implements OnInit {
  public constructor(private titleService: Title ) { }

  ngOnInit() { 
       if (CONF.pageTitle) {
           this.titleService.setTitle( CONF.pageTitle);
       }
       
   }

}