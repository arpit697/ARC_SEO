import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CommonTableModule } from '../../shared/components/common-table/common-table.module';

const material = [
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatMenuModule,
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonTableModule,
    material
  ]
})
export class DashboardModule { }
