import { Component, OnInit } from '@angular/core';
import { IssuesListService } from './services/issues-list.service';
import { Issue } from './models/issue.model';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  issues: Array<Issue> = [];

  constructor(private _issuesListService: IssuesListService) { }

  ngOnInit() {
    this.issues = this._issuesListService.getAll();
  }

}
