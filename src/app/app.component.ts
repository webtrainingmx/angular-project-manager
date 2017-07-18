import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from './common/services/authentication.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  body: any;
  dataSubscription: Subscription;

  constructor(public _authService: AuthenticationService, public element: ElementRef) {
    this.body = this.element.nativeElement.parentElement;

  }

  ngOnInit() {
    this.dataSubscription = this._authService.dataSource$.subscribe(
      (data) => {
        if (data === true) {
          this.body.className = 'someClass';
        }else {
          this.body.className = 'originalClass';
        }
      });

  }
  public ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
