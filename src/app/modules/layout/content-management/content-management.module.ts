import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ContentManagementComponent } from './content-management.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
const material = [
  MatTabsModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
]
@NgModule({
  declarations: [
    ContentManagementComponent,
    WhoWeAreComponent,
    TermsConditionsComponent,
    FaqComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    MatDividerModule,
    material
  ]
})
export class ContentManagementModule { }
