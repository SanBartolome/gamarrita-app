import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderTabHomeRoutingModule } from './provider-tab-home-routing.module';
import { ProviderTabHomeComponent } from './provider-tab-home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderTabHomeComponent],
  imports: [CommonModule, IonicModule, ProviderTabHomeRoutingModule],
})
export class ProviderTabHomeModule {}
