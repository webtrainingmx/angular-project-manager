import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { ProjectListComponent } from './project-list/project-list.component';

import { ProjectListService } from './project-list/services/project-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProjectListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
