import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationManagementComponent } from './notification-management.component';

const routes: Routes = [{ path: '', component: NotificationManagementComponent },
 { path: 'send-notification', loadChildren: () => import('./send-notification/send-notification.module').then(m => m.SendNotificationModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationManagementRoutingModule { }
