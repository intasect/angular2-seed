import {Injectable} from 'angular2/core';

@Injectable()
export class LoginService {

    constructor() { }

    login(userID: string, password: string): boolean {
        if (userID === 'test' && password === 'test') {
            return true;
        } else {
            return false;
        }
    }
}
