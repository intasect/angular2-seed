import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilService } from './services/util-service';
import { HttpService } from './services/http-service';

import { DynamicContentComponent } from '../shared/components/dynamic-content-component';
import { DynamicScriptComponent } from '../shared/components/dynamic-script-component';

import { EmailValidator } from '../shared/validators/email-validator';

@NgModule({
    exports: [
        CommonModule,
        EmailValidator,
        DynamicContentComponent,
        DynamicScriptComponent
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        EmailValidator,
        DynamicContentComponent,
        DynamicScriptComponent
    ],
    providers: [
        UtilService,
        HttpService
    ]
})
export class SharedModule { }

export { UtilService };
