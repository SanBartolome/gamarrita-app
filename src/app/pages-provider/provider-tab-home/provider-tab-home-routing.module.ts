import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderTabHomeComponent } from './provider-tab-home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../provider-home/provider-home.module').then(
        (m) => m.ProviderHomeModule
      ),
  },
  {
    path: 'my-products',
    loadChildren: () =>
      import('../provider-my-products/provider-my-products.module').then(
        (m) => m.ProviderMyProductsModule
      ),
  },
  {
    path: 'create-product',
    loadChildren: () =>
      import('../provider-create-product/provider-create-product.module').then(
        (m) => m.ProviderCreateProductModule
      ),
  },
  {
    path: 'manage-shop',
    loadChildren: () =>
      import('../provider-manage-shop/provider-manage-shop.module').then(
        (m) => m.ProviderManageShopModule
      ),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('../provider-statistics/provider-statistics.module').then(
        (m) => m.ProviderStatisticsModule
      ),
  },
  {
    path: '',
    redirectTo: '/provider-app/home/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderTabHomeRoutingModule {}
