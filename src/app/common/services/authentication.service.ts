import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import { Locker } from 'angular-safeguard';
import 'rxjs/add/operator/map';
import {Config} from '../config';


@Injectable()
export class AuthenticationService {
  hasSession = false;
  user;
  apiBaseURL: string = Config.API_SERVER_URL;

  constructor(public _http: HttpService, private _locker: Locker) {
  }

  public isLogin() {
    const user = this._locker.get('user');
    if (!!user) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public logIn(username: string, password: string) {
    const url = `${this.apiBaseURL}/users/login`;

    return this._http.post(url, {
      'username': username,
      'password': password
    });
  }

  public logout() {
    this.user = null;
    this.hasSession = false;
    this._locker.remove('user');
  }

}
