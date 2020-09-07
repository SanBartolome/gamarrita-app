import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderAccountMenuRoutingModule } from './provider-account-menu-routing.module';
import { ProviderAccountMenuComponent } from './provider-account-menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderAccountMenuComponent],
  imports: [CommonModule, ProviderAccountMenuRoutingModule, IonicModule],
})
export class ProviderAccountMenuModule {}
