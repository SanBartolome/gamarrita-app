import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderHomeComponent } from './provider-home.component';

const routes: Routes = [{ path: '', component: ProviderHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderHomeRoutingModule { }
