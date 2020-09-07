import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserShoppingCartComponent } from './user-shopping-cart.component';

const routes: Routes = [{ path: '', component: UserShoppingCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserShoppingCartRoutingModule { }
