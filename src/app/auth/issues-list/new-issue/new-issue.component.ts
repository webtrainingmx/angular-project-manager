import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../common/services/http.service';
import {Issue} from '../models/issue.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  issue: Issue = <any>{};
  issueForm: FormGroup;
  issueErrors = {
    'title': '',
    'slug': '',
    'project_id': '',
    'description': '',
    'reporter': '',
    'assignee': '',
    'type': '',
    'status': '',
    'priority': ''
  };
  validationMessages = {
    'title': {
      'required': 'Título es requerido.',
      'minlength': 'Título debe tener como mínimo 4 caracteres',
      'maxlength': 'Título debe tener como máximo 24 caracteres',
    },
    'slug': {
      'required': 'Slug es requerido',
      'minlength': 'Slug debe tener como mínimo 3 caracteres',
      'maxlength': 'Slug debe tener como máximo 6 caracteres',

    },
    'project_id': {
      'required': 'ID de proyecto es requerido',
    },
    'description': {
      'required': 'Descipción es requerida',
    },
    'reporter': {
      'required': 'ID de responsable es requerido',
    },
    'assignee': {
      'required': 'ID de asignación es requerido',
    },
    'type': {
      'required': 'Tipo es requerido',
    },
    'status': {
      'required': 'Status es requerido',
     },
    'priority': {
      'required': 'Prioridad es requerida',
    }
  };

  constructor(public _httpService: HttpService, public _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
    console.log(this.issueForm);
  }

  public buildForm() {
    this.issueForm = this._formBuilder.group({
      title: [this.issue.title, [
        Validators.required,
        Validators.maxLength(24),
        Validators.minLength(4)
      ]],
      slug: [this.issue.slug, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ]],
      description: '',
      project_id: [this.issue.project_id, [
        Validators.required,
      ]],
      reporter: [this.issue.reporter, [
        Validators.required
      ]],
      assignee: [this.issue.assignee, [
        Validators.required
      ]],
      type: [this.issue.type, [
        Validators.required
      ]],
      status: [this.issue.status, [
        Validators.required
      ]],
      priority: [this.issue.priority, [
        Validators.required
      ]],
    });

    this.issueForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }


  onValueChanged(data?: any) {
    console.log(this.issueForm);
    if (!this.issueForm) {
      return;
    }
    const form = this.issueForm;
    for (const field in this.issueErrors) {
      // Clear previous error message (if any)
      if (this.issueErrors.hasOwnProperty(field)) {
        this.issueErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.issueErrors[field] += messages[key] + ' ';
            }
          }
        }
      }

    }
  }


  onSubmit() {
    this.issue = this.issueForm.value;

    console.log(this.issue);
    this._httpService.post('url', this.issue).subscribe(
      data => {
        // something to do...
      },
      error => {
        // error catch
      }
    );
    this.issue = <any>{};
  }

}
