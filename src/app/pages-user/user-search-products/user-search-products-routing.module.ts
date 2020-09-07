import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSearchProductsComponent } from './user-search-products.component';

const routes: Routes = [{ path: '', component: UserSearchProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSearchProductsRoutingModule { }
