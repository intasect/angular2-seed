import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { LoginComponent } from './login/login';

@Component({
    selector: 'app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
    constructor(public titleService: Title) {
        this.titleService.setTitle('Angular2');
    }

    ngOnInit() {
        console.log('Initial App State');
    }
}
