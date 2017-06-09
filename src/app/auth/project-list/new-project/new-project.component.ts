import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project.model';
import {HttpService} from '../../../common/services/http.service';
import {Config} from '../../../common/config';
import {Router} from '@angular/router';
import {AlertsService, AlertType} from '@jaspero/ng2-alerts/dist';
import {AuthenticationService} from '../../../common/services/authentication.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  apiBaseURL: string = Config.API_SERVER_URL;

  project: Project = <any>{};

  constructor(public _httpService: HttpService, private _router: Router,
              private _alert: AlertsService, private authService: AuthenticationService) {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const url = `${this.apiBaseURL}/projects`;
    this._httpService.post(url, this.project).subscribe(
      (project: Project) => {
        this._alert.create('success', `Proyecto "${project.title}" ha sido creado.`,
          {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 3000
          });
        setTimeout(() => {
          this._router.navigate(['/proyectos']);
        }, 3000);
      },
      errorResponse => {
        const errorData = errorResponse.json();
        this._alert.create('error', `Proyecto no se pudo crear :(`,
          {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 3000
          });
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
