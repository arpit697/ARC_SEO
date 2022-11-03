import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DASHBOARD, LAYOUT } from 'src/app/constants/routes';
import { FormValidationsService } from 'src/app/services/forms/form-validations.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pageTitle = 'SEO Login';
  hide = true;
  loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _fvs: FormValidationsService,
    private _router: Router,
    private _title: Title,
    private _meta: Meta
  ) {}

  ngOnInit(): void {
    this._title.setTitle(this.pageTitle);
    this._meta.addTags([
      { name: 'author', content: 'Arpit Dwivedi' },
      { name: 'robots', content: 'index, follow' },
    ]);
    this._meta.updateTag( {
      name: 'keywords',
      content:
        'Angular Project, Create Angular Project , SEO , SEO Login , SEO Friendly',
    });
    this._meta.updateTag({ name: 'description', content: 'SEO Login Page' })
    this.createForm();
  }

  createForm() {
    this.loginForm = this._fb.group({
      email: [null, [...this._fvs.VALIDATION.email]],
      password: [null, [...this._fvs.VALIDATION.password]],
    });
  }
  submitHandler() {
    if (this.loginForm.valid) {
      let random = (Math.random() + 1).toString(36).substring(7);
      localStorage.setItem('login-access-token', random);
      this._router.navigate([DASHBOARD.path]);
    }
  }

  toggle(event: any) {
    if (event.checked == true) {
      let loginCredentials: any = {
        loginEmail: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
      };
      localStorage.setItem('login-email', loginCredentials);
    }
  }
}
