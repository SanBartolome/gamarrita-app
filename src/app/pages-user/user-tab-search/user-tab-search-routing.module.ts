import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabSearchComponent } from './user-tab-search.component';

const routes: Routes = [
  {
    path: 'search-products',
    loadChildren: () =>
      import('../user-search-products/user-search-products.module').then(
        (m) => m.UserSearchProductsModule
      ),
  },
  {
    path: '',
    redirectTo: '/app/search/search-products',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabSearchRoutingModule {}
