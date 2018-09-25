import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpService } from '../../../common/services/http.service';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../../common/services/authentication.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProjectListService extends HttpService {

  constructor(public _http: HttpClient, private _authService: AuthenticationService) {
    super(_http);
  }

  public getAll(): Observable<Array<Project>> {
    // const projects: Array<Project> = [];
    const url = `${this.apiBaseURL}/projects`;

    return this.get(url, this._authService.user.api_token);
  }

  public getSingle(id: number): Observable<Project> {
    const url = `${this.apiBaseURL}/projects/${id}`;
    return this.get(url, this._authService.user.api_token);
  }


}
