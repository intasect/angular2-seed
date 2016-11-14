import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'dynamic-load',
    template: require('./dynamic-load.html'),
    styles: [require('./dynamic-load.scss')],
    providers: [
        Title
    ]
})
export class DynamicLoadComponent {
    constructor(public router: Router, public titleService: Title) {
    }

    setTitle() {
        this.titleService.setTitle('Dynamic Load Content');
    }

    ngOnInit() {
        this.setTitle();
    }
}
