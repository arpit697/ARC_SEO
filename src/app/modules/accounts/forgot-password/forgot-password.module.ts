import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
import { LinkSendSuccessComponent } from './link-send-success/link-send-success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ValidateModule } from 'src/app/pipes/validation.error/validate.module';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';

const material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]
@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LinkSendSuccessComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    CommonButtonModule,
    ReactiveFormsModule,
    ValidateModule,
    GetControlModule,
    material
  ]
})
export class ForgotPasswordModule { }
