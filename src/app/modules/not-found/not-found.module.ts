import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonButtonModule } from '../shared/components/common-button/common-button.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    MatCardModule,
    CommonButtonModule
  ]
})
export class NotFoundModule { }
