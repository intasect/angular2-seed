import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { SharedModule } from '../shared/shared-module';

import { DynamicLoadComponent } from './dynamic-load-component';

const routes: Routes = [
    {
        path: '',
        component: DynamicLoadComponent
    }
];

@NgModule({
    imports: [
        HttpModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [DynamicLoadComponent]
})
export default class DynamicLoadModule {

}