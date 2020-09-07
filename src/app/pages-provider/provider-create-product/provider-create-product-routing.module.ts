import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderCreateProductComponent } from './provider-create-product.component';

const routes: Routes = [{ path: '', component: ProviderCreateProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderCreateProductRoutingModule { }
