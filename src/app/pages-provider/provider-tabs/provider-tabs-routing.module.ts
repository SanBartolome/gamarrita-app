import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderTabsComponent } from './provider-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderTabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../provider-tab-home/provider-tab-home.module').then(
            (mod) => mod.ProviderTabHomeModule
          ),
      },
      {
        path: 'my-orders',
        loadChildren: () =>
          import(
            '../provider-tab-my-orders/provider-tab-my-orders.module'
          ).then((m) => m.ProviderTabMyOrdersModule),
      },
      {
        path: 'my-account',
        loadChildren: () =>
          import(
            '../provider-tab-my-account/provider-tab-my-account.module'
          ).then((m) => m.ProviderTabMyAccountModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderTabsRoutingModule {}
