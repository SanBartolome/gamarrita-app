import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccountMenuComponent } from './user-account-menu.component';

const routes: Routes = [{ path: '', component: UserAccountMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountMenuRoutingModule { }
