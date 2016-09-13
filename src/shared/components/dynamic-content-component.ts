import {
    Component,
    OnInit,
    OnChanges,
    AfterViewInit,
    AfterContentInit,
    OnDestroy,
    Input,
    ComponentRef,
    ViewContainerRef,
    ViewChild,
    ComponentFactoryResolver
} from '@angular/core';

import { DynamicScriptComponent } from './dynamic-script-component';

@Component({
    selector: 'dynamic-content',
    template: '<div #target></div>',
    entryComponents: [
        DynamicScriptComponent
    ]
})
export class DynamicContentComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy {
    @Input() innerContent;
    @ViewChild('target', { read: ViewContainerRef }) viewContainerRef;

    private isViewInitialized: boolean = false;
    private cmpRef: ComponentRef<any>;

    constructor(private resolver: ComponentFactoryResolver) { }

    ngOnInit() {

    }

    ngOnChanges() {
        this.updateComponent();
    }

    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }

    ngAfterContentInit() {
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }

    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        //this.cmpRef = this.viewContainerRef.createComponent(this.resolver.resolveComponentFactory(DynamicScriptComponent));
        alert(this.viewContainerRef.element.nativeElement.innerHTML)
    }
}
