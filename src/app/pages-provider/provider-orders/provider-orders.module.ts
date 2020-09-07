import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderOrdersRoutingModule } from './provider-orders-routing.module';
import { ProviderOrdersComponent } from './provider-orders.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderOrdersComponent],
  imports: [CommonModule, ProviderOrdersRoutingModule, IonicModule],
})
export class ProviderOrdersModule {}
