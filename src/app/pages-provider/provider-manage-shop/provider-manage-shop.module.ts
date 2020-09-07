import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderManageShopRoutingModule } from './provider-manage-shop-routing.module';
import { ProviderManageShopComponent } from './provider-manage-shop.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderManageShopComponent],
  imports: [CommonModule, ProviderManageShopRoutingModule, IonicModule],
})
export class ProviderManageShopModule {}
