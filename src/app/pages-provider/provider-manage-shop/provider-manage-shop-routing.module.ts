import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderManageShopComponent } from './provider-manage-shop.component';

const routes: Routes = [{ path: '', component: ProviderManageShopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderManageShopRoutingModule { }
