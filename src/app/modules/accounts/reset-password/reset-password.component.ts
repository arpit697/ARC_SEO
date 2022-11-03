import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FormValidationsService } from 'src/app/services/forms/form-validations.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  pageTitle = "SEO Reset-Password"
  hidePass:boolean = true
  hideConPass:boolean = true
  confirmPass = ''
  resetForm!:FormGroup
  constructor(
    private _fb:FormBuilder,
    private _fvs:FormValidationsService,
    private _title: Title,
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    this._title.setTitle(this.pageTitle);
    this._meta.addTags([
      {
        name: 'keywords',
        content:
          'Angular Project, Create Angular Project , SEO , SEO Reset Password , SEO Friendly',
      },
      { name: 'description', content: 'SEO Login Page' },
      { name: 'author', content: 'Arpit Dwivedi' },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.createForm()
  }

  createForm(){
    this.resetForm = this._fb.group({
      password:[null, [...this._fvs.VALIDATION.password]]
    })
  }

}
