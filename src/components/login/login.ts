// Third party library.
import {Component} from '@angular/core';

@Component({
    templateUrl: './pages/login/login.html',
    providers: [
        
    ]
})
export class LoginComponent {
    public userID: string = 'test';

    constructor() {
    }

    loggedOn(): boolean {
        return true;
    }

    login() {
    }
}
