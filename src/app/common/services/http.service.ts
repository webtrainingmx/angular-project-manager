import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(public _http: Http) { }

  public get(url): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this._http.get(url, options).map(response => response.json());
  }

  public post(url, params): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(params);

    return this._http.post(url, body, options).map(response => response.json());
  }
}
