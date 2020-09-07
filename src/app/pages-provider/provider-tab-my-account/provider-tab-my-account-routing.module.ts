import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderTabMyAccountComponent } from './provider-tab-my-account.component';

const routes: Routes = [
  {
    path: 'account-menu',
    loadChildren: () =>
      import('../provider-account-menu/provider-account-menu.module').then(
        (m) => m.ProviderAccountMenuModule
      ),
  },
  { path: '', redirectTo: '/provider-app/my-account/account-menu' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderTabMyAccountRoutingModule {}
