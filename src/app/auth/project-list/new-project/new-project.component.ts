import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project.model';
import {HttpService} from '../../../common/services/http.service';
import {Config} from '../../../common/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  apiBaseURL: string = Config.API_SERVER_URL;

  project: Project = <any>{};

  constructor(public _httpService: HttpService, private _router: Router) {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const url = `${this.apiBaseURL}/projects`;
    this._httpService.post(url, this.project).subscribe(
      (project: Project) => {
        console.log(`Proyecto creado: ${project.title}` );
        this._router.navigate(['/proyectos']);
      },
      errorResponse => {
        const errorData = errorResponse.json();
        console.error(errorData.error);
      },
      () => {
        console.log('Finished creation request');
      }
    );
  }

  ngOnInit() {
  }

}
