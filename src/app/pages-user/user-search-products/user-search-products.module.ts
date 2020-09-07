import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchProductsRoutingModule } from './user-search-products-routing.module';
import { UserSearchProductsComponent } from './user-search-products.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserSearchProductsComponent],
  imports: [CommonModule, UserSearchProductsRoutingModule, IonicModule],
})
export class UserSearchProductsModule {}
