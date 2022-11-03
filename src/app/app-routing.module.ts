import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACCOUNT, LAYOUT} from './constants/routes';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: ACCOUNT.path, loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule) },
  { path: LAYOUT.path, canActivate:[AuthGuard], loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule) },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
