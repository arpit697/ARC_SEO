import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewStaffRoutingModule } from './add-new-staff-routing.module';
import { AddNewStaffComponent } from './add-new-staff.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonButtonModule } from 'src/app/modules/shared/components/common-button/common-button.module';
import {MatDividerModule} from '@angular/material/divider';
const material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    AddNewStaffComponent
  ],
  imports: [
    CommonModule,
    AddNewStaffRoutingModule,
    CommonButtonModule,
    material,
  ]
})
export class AddNewStaffModule { }
