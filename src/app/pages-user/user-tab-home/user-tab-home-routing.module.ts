import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabHomeComponent } from './user-tab-home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../user-home/user-home.module').then((m) => m.UserHomeModule),
  },
  {
    path: '',
    redirectTo: '/app/home/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabHomeRoutingModule {}
