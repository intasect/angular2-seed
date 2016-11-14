import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { SharedModule } from '../shared/shared-module';

import { DynamicLoadComponent } from './dynamic-load-component';

console.log('`DynamicLoadComponent` bundle loaded asynchronously');

export const routes: Routes = [
    {
        path: '',
        component: DynamicLoadComponent,
        pathMatch: 'full'
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