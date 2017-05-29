import { Component, OnInit } from '@angular/core';
import { ProjectListService } from './services/project-list.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Array<Project> = [];

  constructor(private _projectListService: ProjectListService) { }

  ngOnInit() {
    this.projects = this._projectListService.getAll();
  }

}
