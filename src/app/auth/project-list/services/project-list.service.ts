import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpService } from '../../../common/services/http.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "../../../common/services/authentication.service";

@Injectable()
export class ProjectListService extends HttpService {

  constructor(public _http: Http, private _authService: AuthenticationService) {
    super(_http);
  }

  public getAll(): Observable<Array<Project>> {
    const projects: Array<Project> = [];
    const url = `${this.apiBaseURL}/projects`;

    return this.get(url, this._authService.user.api_token);
  }


}
