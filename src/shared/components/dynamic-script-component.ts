import {
    Component,
    OnInit,
    OnChanges,
    AfterViewInit,
    OnDestroy,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'dynamic-script',
    template: `.`
})
export class DynamicScriptComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {

    }

    ngOnChanges() {
    }

    ngAfterViewInit() {
        console.log(this.elementRef.nativeElement);
    }

    ngOnDestroy() {
    }
}
