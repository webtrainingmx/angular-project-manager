import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/layout/header/header.component';
import {ProjectListComponent} from './auth/project-list/project-list.component';

import {ProjectListService} from './auth/project-list/services/project-list.service';
import {IssuesListService} from './auth/issues-list/services/issues-list.service';
import {IssuesListComponent} from './auth/issues-list/issues-list.component';
import {HomeComponent} from './auth/home/home.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {SortingComponent} from './common/sorting/sorting.component';
import {GroupingComponent} from './common/grouping/grouping.component';
import {NewProjectComponent} from './auth/project-list/new-project/new-project.component';
import {NewIssueComponent} from './auth/issues-list/new-issue/new-issue.component';
import {HttpService} from './common/services/http.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'proyectos', component: ProjectListComponent, data: { name: 'Proyectos' }
},
  {
    path: 'issues', component: IssuesListComponent, data: { name: 'Issues' }
  },
  {
    path: 'proyectos/nuevo',
    component: NewProjectComponent
  },
  {
    path: 'issues/nuevo',
    component: NewIssueComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectListComponent,
    IssuesListComponent,
    HomeComponent,
    NotFoundComponent,
    SortingComponent,
    GroupingComponent,
    NewProjectComponent,
    NewIssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
  ],
  providers: [ProjectListService, IssuesListService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
