import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AbsoluteRoutingModule } from 'src/app/pipes/routing-pipes/absolute-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { ValidateModule } from 'src/app/pipes/validation.error/validate.module';
import { GetControlPipe } from 'src/app/pipes/get-control/get-control.pipe';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
const material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonButtonModule,
    ReactiveFormsModule,
    AbsoluteRoutingModule,
    ValidateModule,
    GetControlModule,
    material
  ]
})
export class LoginModule { }
