import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabShoppingComponent } from './user-tab-shopping.component';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      import('../user-orders/user-orders.module').then(
        (m) => m.UserOrdersModule
      ),
  },
  {
    path: '',
    redirectTo: '/app/shopping/orders',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabShoppingRoutingModule {}
