import { APP_BASE_HREF } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared-module';
import { LoginModule } from '../login/login-module';

import { AppComponent } from './app-component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    }
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true }),
        SharedModule,
        LoginModule
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: APP_BASE_HREF, useValue: '/'
        }
    ]
})
export class AppModule {

}

