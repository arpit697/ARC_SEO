import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientManagementComponent } from './client-management.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CommonButtonModule } from '../../shared/components/common-button/common-button.module';
import { MatButtonModule } from '@angular/material/button';
import { AbsoluteRoutingModule } from 'src/app/pipes/routing-pipes/absolute-routing.module';
const material =[
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
 
]
@NgModule({
  declarations: [
    ClientManagementComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    CommonButtonModule,
    AbsoluteRoutingModule,
   
    material
    
  ]
})
export class ClientManagementModule { }
