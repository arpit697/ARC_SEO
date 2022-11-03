import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DASHBOARD } from 'src/app/constants/routes';
import { FormValidationsService } from 'src/app/services/forms/form-validations.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  pageTitle = "SEO Sign-Up"
  hide = true;
  signUpForm!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _fvs: FormValidationsService,
    private _router: Router,
    private _title:Title,
    private _meta:Meta
  ) { }

  ngOnInit(): void {
    this._title.setTitle(this.pageTitle);
    this._meta.addTags([
      {name: 'keywords', content: 'Angular Project, Create Angular Project , SEO , SEO Sign Up , SEO Friendly'},
      {name: 'description', content: 'SEO Sign Up Page'},
        {name: 'author', content: 'Arpit Dwivedi'},
        {name: 'robots', content: 'index, follow'}
      ]);
    this.createForm()
  }

  createForm() {
    this.signUpForm = this._fb.group({
      email: [null, [...this._fvs.VALIDATION.email]],
      password: [null, [...this._fvs.VALIDATION.password]],
      name : [null , [...this._fvs.VALIDATION.name]]
    })
  }
  submitHandler() {
    if (this.signUpForm.valid) {
      let random = (Math.random() + 1).toString(36).substring(7);
      localStorage.setItem('login-access-token' , random)
      this._router.navigate([DASHBOARD.path])
    }
  }

  toggle(event: any) {
    if (event.checked == true) {
      let loginCredentials: any = {
        loginEmail: this.signUpForm.controls['email'].value,
        password: this.signUpForm.controls['password'].value
      }
      localStorage.setItem('login-email', loginCredentials)
    }
  }

}
