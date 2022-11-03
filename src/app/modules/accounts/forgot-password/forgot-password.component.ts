import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FormValidationsService } from 'src/app/services/forms/form-validations.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  pageTitle = 'SEO Forgot-Password';
  forgotForm!:FormGroup
  sendLink = false
  constructor(
    private _fb:FormBuilder,
    private _fvs:FormValidationsService,
    private _title: Title,
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this._title.setTitle(this.pageTitle);
    this._meta.addTags([
      {
        name: 'keywords',
        content:
          'Angular Project, Create Angular Project , SEO , SEO Forgot Password , SEO Friendly',
      },
      { name: 'description', content: 'SEO Login Page' },
      { name: 'author', content: 'Arpit Dwivedi' },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.forgotForm = this._fb.group({
      email:[null, [...this._fvs.VALIDATION.email]]
    })
  }
  submitHandler() {
    if(this.forgotForm.valid){
      this.sendLink = true
    }
  }
}
