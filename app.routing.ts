import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoaderComponent} from './loader/loader.component';

// are these needed?
import {NaviComponent} from './navi/navi.component';
import {NaviSubComponent} from './navi/navi-sub.component';
import {FooterComponent} from './footer/footer.component';

const appRoutes: Routes = [
    { path: '',  component: LoaderComponent },
    { path: ':page1', component: LoaderComponent },
    { path: ':page1/:page2',  component: LoaderComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);