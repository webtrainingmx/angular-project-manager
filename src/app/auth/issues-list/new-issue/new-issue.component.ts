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
      'required': 'Titulo es requerido.',
      'minlength': 'Titulo debe tener como minimo 4 caracteres',
      'maxlength': 'Titulo debe tener como maximo 24 caracteres',
    },
    'slug': {
      'required': 'Slug es requerido',
      'minlength': 'Titulo debe tener como minimo 3 caracteres',
      'maxlength': 'Titulo debe tener como maximo 6 caracteres',

    },
    'project_id': {
      'required': 'ID de proyecto es requerido',
    },
    'description': {
      'required': 'Descipcion es requerido',
    },
    'reporter': {
      'required': 'ID de creador es requerido',
    },
    'assignee': {
      'required': 'ID de responsable es requerido',
    },
    'type': {
      'required': 'Tipo es requerido',
    },
    'status': {
      'required': 'Estatus es requerido',
     },
    'priority': {
      'required': 'Prioridad es requerido',
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
      // clear previous error message (if any)
      this.issueErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.issueErrors[field] += messages[key] + ' ';
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
