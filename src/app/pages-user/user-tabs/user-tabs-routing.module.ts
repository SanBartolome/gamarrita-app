import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsComponent } from './user-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: UserTabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../user-tab-home/user-tab-home.module').then(
            (mod) => mod.UserTabHomeModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../user-tab-search/user-tab-search.module').then(
            (m) => m.UserTabSearchModule
          ),
      },
      {
        path: 'shopping',
        loadChildren: () =>
          import('../user-tab-shopping/user-tab-shopping.module').then(
            (m) => m.UserTabShoppingModule
          ),
      },
      {
        path: 'my-account',
        loadChildren: () =>
          import('../user-tab-my-account/user-tab-my-account.module').then(
            (m) => m.UserTabMyAccountModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsRoutingModule {}
