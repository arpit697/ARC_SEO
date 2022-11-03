import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    StaffManagementComponent
  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    CommonButtonModule,
    material
  ]
})
export class StaffManagementModule { }
