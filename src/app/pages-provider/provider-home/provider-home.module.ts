import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderHomeRoutingModule } from './provider-home-routing.module';
import { ProviderHomeComponent } from './provider-home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderHomeComponent],
  imports: [CommonModule, ProviderHomeRoutingModule, IonicModule],
})
export class ProviderHomeModule {}
