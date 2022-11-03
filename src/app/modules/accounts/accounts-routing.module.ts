import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD, SIGNUP } from 'src/app/constants/routes';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [

  {
    path: '', component: AccountsComponent, children: [
      {
        path: '',
        redirectTo: LOGIN.path,
        pathMatch: 'full'
      },
      { path: LOGIN.path, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: FORGOT_PASSWORD.path, loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
      { path: RESET_PASSWORD.path, loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
      { path: SIGNUP.path, loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
