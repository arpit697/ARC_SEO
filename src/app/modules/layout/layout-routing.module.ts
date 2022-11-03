import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CLIENT_MANAGEMENT, CONTENT_MANAGEMENT, DASHBOARD, EARNINGS_MANAGEMENT, MY_PROFILE, NOTIFICATION_MANAGEMENT, STAFF_MANAGEMENT, TRANSACTION_MANAGEMENT, USER_MANAGEMENT } from 'src/app/constants/routes';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: USER_MANAGEMENT.path, loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
    { path: TRANSACTION_MANAGEMENT.path, loadChildren: () => import('./transaction-management/transaction-management.module').then(m => m.TransactionManagementModule) },
    { path: EARNINGS_MANAGEMENT.path, loadChildren: () => import('./earnings-management/earnings-management.module').then(m => m.EarningsManagementModule) },
    { path: NOTIFICATION_MANAGEMENT.path, loadChildren: () => import('./notification-management/notification-management.module').then(m => m.NotificationManagementModule) },
    { path: CONTENT_MANAGEMENT.path, loadChildren: () => import('./content-management/content-management.module').then(m => m.ContentManagementModule) },
    { path: STAFF_MANAGEMENT.path, loadChildren: () => import('./staff-management/staff-management.module').then(m => m.StaffManagementModule) },
    { path: CLIENT_MANAGEMENT.path, loadChildren: () => import('./client-management/client-management.module').then(m => m.ClientManagementModule) },
    { path: MY_PROFILE.path, loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule) },
    { path: DASHBOARD.path, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
