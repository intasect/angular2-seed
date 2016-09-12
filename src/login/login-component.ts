// Third party library.
import { Component } from '@angular/core';

import { LoginService } from './login-service';

@Component({
    template: require('./login.html'),
    providers: [
        LoginService
    ]
})
export class LoginComponent {

    public userID: string;
    public password: string;

    constructor(public loginService: LoginService) {
        console.log('LoginComponent');
    }

    loggedOn(): boolean {
        return true;
    }

    login(): boolean {
        return this.loginService.login(this.userID, this.password);
    }
}
