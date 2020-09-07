import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderCreateProductRoutingModule } from './provider-create-product-routing.module';
import { ProviderCreateProductComponent } from './provider-create-product.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderCreateProductComponent],
  imports: [CommonModule, ProviderCreateProductRoutingModule, IonicModule],
})
export class ProviderCreateProductModule {}
