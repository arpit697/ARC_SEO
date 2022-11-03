import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import { NotificationManagementComponent } from './notification-management.component';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
    NotificationManagementComponent
  ],
  imports: [
    CommonModule,
    NotificationManagementRoutingModule,
    CommonButtonModule,
    material
  ]
})
export class NotificationManagementModule { }
