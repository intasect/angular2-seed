import { TestBed, ComponentFixture, async} from '@angular/core/testing';

import { SharedModule } from '../shared/shared-module';

import { LoginComponent } from './login-component';
import { LoginService } from './login-service';

describe('LoginComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                SharedModule
            ],
            providers: [
                LoginService
            ]
        });
    });
    it('ログオン済み', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                let loginComponent: LoginComponent = fixture.componentInstance;
                expect(loginComponent.loggedOn()).toBe(true, 'should be true.');
            });
        });
    }));
    it('ログインサービスが呼び出された', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                let loginComponent: LoginComponent = fixture.componentInstance;
                spyOn(loginComponent.loginService, 'login').and.callThrough();
                loginComponent.userID = 'test';
                loginComponent.password = 'test123';
                loginComponent.login();
                expect(loginComponent.loginService.login).toHaveBeenCalledWith(loginComponent.userID, loginComponent.password);
            });
        });
    }));
});

describe('LoginService', () => {
    let loginService: LoginService;

    beforeEach(() => {
        loginService = new LoginService();
    });

    it('ログイン失敗', async(() => {
        expect(loginService.login('test', 'test')).toBeTruthy();
    }));

    it('ログイン失敗', async(() => {
        expect(loginService.login('abc', '123')).toBeFalsy();
    }));
});
