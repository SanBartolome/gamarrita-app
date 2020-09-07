import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShoppingCartRoutingModule } from './user-shopping-cart-routing.module';
import { UserShoppingCartComponent } from './user-shopping-cart.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserShoppingCartComponent],
  imports: [CommonModule, UserShoppingCartRoutingModule, IonicModule],
})
export class UserShoppingCartModule {}
