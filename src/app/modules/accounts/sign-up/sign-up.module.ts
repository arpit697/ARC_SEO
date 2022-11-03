import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { AbsoluteRoutingModule } from 'src/app/pipes/routing-pipes/absolute-routing.module';
import { ValidateModule } from 'src/app/pipes/validation.error/validate.module';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
const material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule
]

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    CommonButtonModule,
    ReactiveFormsModule,
    AbsoluteRoutingModule,
    ValidateModule,
    GetControlModule,
    material
  ]
})
export class SignUpModule { }
