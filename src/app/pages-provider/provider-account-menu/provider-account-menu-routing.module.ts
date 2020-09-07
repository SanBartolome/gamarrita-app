import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderAccountMenuComponent } from './provider-account-menu.component';

const routes: Routes = [{ path: '', component: ProviderAccountMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderAccountMenuRoutingModule { }
