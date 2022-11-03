import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonButtonModule } from 'src/app/modules/shared/components/common-button/common-button.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonTableModule } from 'src/app/modules/shared/components/common-table/common-table.module';
const material =[
  MatCardModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    CommonButtonModule,
    CommonTableModule,
    material
  ]
})
export class DetailModule { }
