import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpService } from '../../../common/services/http.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectListService extends HttpService {

  constructor(public _http: Http) {
    super(_http);
  }

  public getAll(): Observable<Array<Project>> {
    const projects: Array<Project> = [];
    const url = `${this.apiBaseURL}/projects`;

    return this.get(url);
  }


}
