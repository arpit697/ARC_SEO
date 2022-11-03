import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';

const material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    CommonButtonModule,
    ReactiveFormsModule,
    material
  ]
})
export class ResetPasswordModule { }
