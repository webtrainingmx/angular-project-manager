import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable()
export class ProjectListService {

  constructor() { }

  public getAll(): Array<Project> {
    const projects: Array<Project> = [];

    projects.push( {
      id: 1,
      title: 'Sistema de Evaluaciones 2017',
      slug: 'SIE',
      description: 'Proyecto relacionado con las tareas del sistema de evaluaciones',
      user_id: 2,
      created_at: '2017-05-29 16:55:57',
      updated_at: '2017-05-29 17:03:45'
    } );
    projects.push( {
      id: 1,
      title: 'Sistema de Evaluaciones 2017',
      slug: 'SIE',
      description: 'Proyecto relacionado con las tareas del sistema de evaluaciones',
      user_id: 2,
      created_at: '2017-05-29 16:55:57',
      updated_at: '2017-05-29 17:03:45'
    } );

    return projects;
  }


}
