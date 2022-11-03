import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_STAFF } from 'src/app/constants/routes';
import { StaffManagementComponent } from './staff-management.component';

const routes: Routes = [{
  path: '', component: StaffManagementComponent},
  { path: ADD_STAFF.path , loadChildren: () => import('./add-new-staff/add-new-staff.module').then(m => m.AddNewStaffModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
