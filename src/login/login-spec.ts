import { TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {HttpService} from '../shared/services/http-service';

import { SharedModule } from '../shared/shared-module';

import { LoginComponent } from './login-component';
import { LoginService } from './login-service';

describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                SharedModule
            ],
            providers: [
                Http,
                LoginService
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(LoginComponent);
            
        });
    });

    // afterEach(() => {
    //     fixture.destroy();
    // });

    it('ログオン済み', async(() => {
        let loginComponent: LoginComponent = fixture.componentInstance;
        // fixture.detectChanges();
        expect(loginComponent.loggedOn()).toBe(true, 'should be true.');
    }));

    it('ログインサービスが呼び出された', async(() => {
        let loginComponent: LoginComponent = fixture.componentInstance;
        spyOn(loginComponent.loginService, 'login').and.callThrough();
        loginComponent.model.email = 'test';
        loginComponent.model.password = 'test123';
        loginComponent.login();
        // fixture.detectChanges();
        expect(loginComponent.loginService.login).toHaveBeenCalledWith(loginComponent.model.email, loginComponent.model.password);
    }));
});

// describe('LoginService', () => {
//     let loginService: LoginService;

//     beforeEach(() => {
//         oginService = new LoginService(http, httpService);
//     });

//     it('ログイン失敗', async(() => {
//         expect(loginService.login('test@test.com', 'test')).toBeTruthy();
//     }));

//     it('ログイン失敗', async(() => {
//         expect(loginService.login('abc@test.com', '123')).toBeFalsy();
//     }));
// });
