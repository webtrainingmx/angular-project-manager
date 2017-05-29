import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';

import { ProjectListService } from './auth/project-list/services/project-list.service';
import { IssuesListService } from './auth/issues-list/services/issues-list.service';
import { IssuesListComponent } from './auth/issues-list/issues-list.component';
import { HomeComponent } from './auth/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'proyectos', component: ProjectListComponent
  },
  {
    path: 'issues', component: IssuesListComponent
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [ProjectListService, IssuesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
