import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderOrdersComponent } from './provider-orders.component';

const routes: Routes = [{ path: '', component: ProviderOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderOrdersRoutingModule { }
