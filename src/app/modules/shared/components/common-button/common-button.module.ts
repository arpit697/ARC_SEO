import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './common-button.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';

const material = [
  MatButtonModule
]

@NgModule({
  declarations: [
    CommonButtonComponent
  ],
  imports: [
    CommonModule,
    NgxLoadingButtonsModule,
    material
  ],
  exports:[CommonButtonComponent]
})
export class CommonButtonModule { }
