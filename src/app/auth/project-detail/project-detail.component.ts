import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectListService } from '../project-list/services/project-list.service';
import { Project } from '../project-list/models/project.model';

@Component( {
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.css' ]
} )
export class ProjectDetailComponent implements OnInit {
  project: Project;
  constructor( public _activatedRoute: ActivatedRoute,
               public _projectListService: ProjectListService ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      const id: number = params[ 'id' ];
      this._projectListService.getSingle(id).subscribe(
        (data) => {
          this.project = data;
        },
        err => {
          console.error(err);
        },
        () => {});

    } );
  }

}
