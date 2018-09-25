import {Injectable} from '@angular/core';
// import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Config} from '../config';

@Injectable()
export class HttpService {
  apiBaseURL = Config.API_SERVER_URL;

  constructor(public _http: HttpClient) {
  }

  public get(url, token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Api-Token': token
    });
    const options = { headers: headers };
    return this._http.get(url, options);
  }

  public post(url, params, token?): Observable<any> {
    const headers = !!token ? new HttpHeaders({
      'Content-Type': 'application/json',
      'Api-Token': token
    }) : new HttpHeaders({'Content-Type': 'application/json'});

    const options = { headers: headers };
    const body = JSON.stringify(params);

    return this._http.post(url, body, options);
  }

  public delete(url, token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Api-Token': token
    });
    const options = { headers: headers };

    return this._http.delete(url, options);
  }

}
