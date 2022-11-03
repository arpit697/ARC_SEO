import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFaqRoutingModule } from './add-faq-routing.module';
import { AddFaqComponent } from './add-faq.component';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatCardModule
]

@NgModule({
  declarations: [
    AddFaqComponent
  ],
  imports: [
    CommonModule,
    AddFaqRoutingModule,
   
    material
    
  ]
})
export class AddFaqModule { }
