import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderTabMyOrdersRoutingModule } from './provider-tab-my-orders-routing.module';
import { ProviderTabMyOrdersComponent } from './provider-tab-my-orders.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderTabMyOrdersComponent],
  imports: [CommonModule, IonicModule, ProviderTabMyOrdersRoutingModule],
})
export class ProviderTabMyOrdersModule {}
