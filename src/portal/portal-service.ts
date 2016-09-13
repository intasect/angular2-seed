import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {HttpService} from '../shared/services/http-service';

@Injectable()
export class PortalService {

    constructor(private http: Http, private httpService: HttpService) { }

    getHTML(): Promise<string> {
        return this.http.get('shared/assets/mocks/portal/news.html')
            .toPromise()
            .then(response => response.text())
            .catch(this.httpService.handleError);
    }
}
