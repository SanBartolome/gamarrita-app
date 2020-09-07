import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderMyProductsRoutingModule } from './provider-my-products-routing.module';
import { ProviderMyProductsComponent } from './provider-my-products.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderMyProductsComponent],
  imports: [CommonModule, ProviderMyProductsRoutingModule, IonicModule],
})
export class ProviderMyProductsModule {}
