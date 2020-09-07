import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderMyProductsComponent } from './provider-my-products.component';

const routes: Routes = [{ path: '', component: ProviderMyProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderMyProductsRoutingModule { }
