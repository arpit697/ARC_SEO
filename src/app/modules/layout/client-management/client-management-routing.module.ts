import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DETAIL } from 'src/app/constants/routes';
import { ClientManagementComponent } from './client-management.component';

const routes: Routes = [
  {
    path: '', component: ClientManagementComponent
  },
  { path: DETAIL.path, loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientManagementRoutingModule { }
