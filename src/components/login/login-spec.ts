import { TestBed, ComponentFixture} from '@angular/core/testing';

import { Title } from '@angular/platform-browser';
import { LoginComponent } from './login';

describe('LoginComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [Title]
        });
        TestBed.compileComponents();
    });
    it('Title should be test.', () => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
            let login: LoginComponent = fixture.componentInstance;
            expect(login.userID).toEqual('test');
        });
    });
    it('ログオン済み', () => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
            let login: LoginComponent = fixture.componentInstance;
            expect(login.loggedOn()).toEqual(true);
        });
    });

    it('ログオン済み2', () => {
        let login: LoginComponent = new LoginComponent();
        expect(login.userID).toEqual('test');
        expect(login.loggedOn()).toEqual(true);
    });
});
