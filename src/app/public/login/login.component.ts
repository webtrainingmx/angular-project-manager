import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../common/services/authentication.service';
import {Router} from '@angular/router';
import {AlertsService} from '@jaspero/ng2-alerts/dist';
import { Locker} from 'angular-safeguard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = <any>{};

  constructor(public _authService: AuthenticationService,
              public _router: Router,
              private _locker: Locker
  ) {
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this._authService.logIn(this.user.username, this.user.password).subscribe(
      (data) => {
          this._authService.user = data;
          this._authService.hasSession = true;
          this._locker.set('user', data);
          this._router.navigate(['/home']);
      },
      err => {
        this._authService.hasSession = false;
      }
    );
  }

}
