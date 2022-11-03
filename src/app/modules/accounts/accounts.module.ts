import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { MatCardModule } from '@angular/material/card';
import { AbsoluteRoutingModule } from 'src/app/pipes/routing-pipes/absolute-routing.module';

const material = [
  MatCardModule
]

@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AbsoluteRoutingModule,
    material
  ]
})
export class AccountsModule { }
