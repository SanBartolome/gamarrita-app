import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOrdersRoutingModule } from './user-orders-routing.module';
import { UserOrdersComponent } from './user-orders.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserOrdersComponent],
  imports: [CommonModule, UserOrdersRoutingModule, IonicModule],
})
export class UserOrdersModule {}
