import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project.model';
import {HttpService} from '../../../common/services/http.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {


  project: Project = <any>{};
  constructor(public _httpService: HttpService) {
  }

  onSubmit() {
    console.log(this.project);
    this._httpService.post('url', this.project).subscribe(
      data => {
        // something to do...
      },
      error => {
        // error catch
      }
    );
    this.project = <any>{};
  }

  ngOnInit() {
  }

}
