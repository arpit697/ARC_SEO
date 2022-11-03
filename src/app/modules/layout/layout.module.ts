import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AbsoluteRoutingModule } from 'src/app/pipes/routing-pipes/absolute-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ClearStringPipe } from 'src/app/pipes/routing-pipes/clear-string.pipe';
import { MyProfileModule } from './my-profile/my-profile.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const material = [
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    LayoutComponent,
    ClearStringPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AbsoluteRoutingModule,
    material,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MyProfileModule
  ]
})
export class  LayoutModule{ }
