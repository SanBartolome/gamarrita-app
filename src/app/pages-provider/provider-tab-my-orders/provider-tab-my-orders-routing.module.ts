import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderTabMyOrdersComponent } from './provider-tab-my-orders.component';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      import('../provider-orders/provider-orders.module').then(
        (m) => m.ProviderOrdersModule
      ),
  },
  { path: '', redirectTo: '/provider-app/my-orders/orders' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderTabMyOrdersRoutingModule {}
