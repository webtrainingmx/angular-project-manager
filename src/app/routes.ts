import { Routes } from '@angular/router';
import { AuthGuard } from 'app/common/guards/auth.guard';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { ProjectsHomeComponent } from './auth/projects-home/projects-home.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { IssuesListComponent } from './auth/issues-list/issues-list.component';
import { NewProjectComponent } from './auth/project-list/new-project/new-project.component';
import { NewIssueComponent } from './auth/issues-list/new-issue/new-issue.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PublicGuard } from './common/guards/public.guard';
import { ProjectDetailComponent } from './auth/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [ PublicGuard ]
  },
  {
    path: 'home', component: HomeComponent, data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'proyectos', component: ProjectsHomeComponent,
    data: { name: 'Proyectos' }, canActivate: [ AuthGuard ],
    children: [
      { path: '', component: ProjectListComponent,  pathMatch: 'full' },
      { path: 'detalle/:id', component: ProjectDetailComponent },
      ]
  },
  {
    path: 'issues', component: IssuesListComponent, data: { name: 'Issues' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'proyectos/nuevo',
    component: NewProjectComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'issues/nuevo',
    component: NewIssueComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];
