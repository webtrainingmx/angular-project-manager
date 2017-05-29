import { Injectable } from '@angular/core';
import { Issue } from '../models/issue.model';

@Injectable()
export class IssuesListService {

  constructor() { }

  public getAll(): Array<Issue> {
    const issues: Array<Issue> = [];

    issues.push( {
      id: 1,
      title: 'Crear layout principal de la aplicación con Bootstrap',
      slug: '01',
      description: 'Este layout deberá usar la última versión estable de Bootstrap',
      project_id: 1,
      reporter: 2,
      assignee: 2,
      type: 'TASK',
      status: 'OPEN',
      priority: 'CRITICAL',
      created_at: '2017-05-29 17:08:24',
      updated_at: '2017-05-29 17:39:49'
    } );

    return issues;
  }
}
