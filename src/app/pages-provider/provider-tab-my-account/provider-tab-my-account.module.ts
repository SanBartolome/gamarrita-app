import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderTabMyAccountRoutingModule } from './provider-tab-my-account-routing.module';
import { ProviderTabMyAccountComponent } from './provider-tab-my-account.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderTabMyAccountComponent],
  imports: [CommonModule, IonicModule, ProviderTabMyAccountRoutingModule],
})
export class ProviderTabMyAccountModule {}
