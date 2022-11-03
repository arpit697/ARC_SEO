import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendNotificationRoutingModule } from './send-notification-routing.module';
import { SendNotificationComponent } from './send-notification.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonButtonModule } from 'src/app/modules/shared/components/common-button/common-button.module';

const material = [
  MatCardModule,
  MatRadioModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]


@NgModule({
  declarations: [
    SendNotificationComponent
  ],
  imports: [
    CommonModule,
    SendNotificationRoutingModule,
    CommonButtonModule,
    material
  ]
})
export class SendNotificationModule { }
