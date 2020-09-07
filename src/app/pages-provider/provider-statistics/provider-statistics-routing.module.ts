import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderStatisticsComponent } from './provider-statistics.component';

const routes: Routes = [{ path: '', component: ProviderStatisticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderStatisticsRoutingModule { }
