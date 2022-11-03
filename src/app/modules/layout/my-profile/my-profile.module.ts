import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';

const material =[
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    CommonButtonModule,
    material
  ]
})
export class MyProfileModule { }
