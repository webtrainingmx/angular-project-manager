import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from './common/services/authentication.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private _authenticationService: AuthenticationService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this._authenticationService.isLogin() ) {
      return true;
    }

    console.log('access denied!');
    this.router.navigate(['/login']);
    return false;
  }
}
