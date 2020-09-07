import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderStatisticsRoutingModule } from './provider-statistics-routing.module';
import { ProviderStatisticsComponent } from './provider-statistics.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderStatisticsComponent],
  imports: [CommonModule, ProviderStatisticsRoutingModule, IonicModule],
})
export class ProviderStatisticsModule {}
