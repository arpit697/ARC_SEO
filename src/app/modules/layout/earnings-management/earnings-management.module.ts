import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningsManagementRoutingModule } from './earnings-management-routing.module';
import { EarningsManagementComponent } from './earnings-management.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';

const material =[
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    EarningsManagementComponent
  ],
  imports: [
    CommonModule,
    EarningsManagementRoutingModule,
    CommonButtonModule,
    material
  ]
})
export class EarningsManagementModule { }
