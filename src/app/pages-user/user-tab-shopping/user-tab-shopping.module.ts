import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTabShoppingRoutingModule } from './user-tab-shopping-routing.module';
import { UserTabShoppingComponent } from './user-tab-shopping.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserTabShoppingComponent],
  imports: [CommonModule, IonicModule, UserTabShoppingRoutingModule],
})
export class UserTabShoppingModule {}
