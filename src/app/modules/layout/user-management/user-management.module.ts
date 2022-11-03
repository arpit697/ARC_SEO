import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
const material = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatDividerModule,
  MatIconModule
]
@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule,
    CommonButtonModule,
    material
  ]
})
export class UserManagementModule { }
