import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabMyAccountComponent } from './user-tab-my-account.component';

const routes: Routes = [
  {
    path: 'account-menu',
    loadChildren: () =>
      import('../user-account-menu/user-account-menu.module').then(
        (m) => m.UserAccountMenuModule
      ),
  },
  {
    path: '',
    redirectTo: '/app/my-account/account-menu',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabMyAccountRoutingModule {}
