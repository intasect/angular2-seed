import { APP_BASE_HREF } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], {useHash: false}),
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

