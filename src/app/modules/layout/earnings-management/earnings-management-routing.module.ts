import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningsManagementComponent } from './earnings-management.component';

const routes: Routes = [{ path: '', component: EarningsManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningsManagementRoutingModule { }
