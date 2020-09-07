import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderLoginComponent } from './provider-login.component';

const routes: Routes = [{ path: '', component: ProviderLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderLoginRoutingModule { }
