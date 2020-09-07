import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderTabsRoutingModule } from './provider-tabs-routing.module';
import { ProviderTabsComponent } from './provider-tabs.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderTabsComponent],
  imports: [CommonModule, IonicModule, ProviderTabsRoutingModule],
})
export class ProviderTabsModule {}
