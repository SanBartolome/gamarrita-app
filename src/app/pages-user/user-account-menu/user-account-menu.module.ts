import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountMenuRoutingModule } from './user-account-menu-routing.module';
import { UserAccountMenuComponent } from './user-account-menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserAccountMenuComponent],
  imports: [CommonModule, UserAccountMenuRoutingModule, IonicModule],
})
export class UserAccountMenuModule {}
