import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTabMyAccountRoutingModule } from './user-tab-my-account-routing.module';
import { UserTabMyAccountComponent } from './user-tab-my-account.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserTabMyAccountComponent],
  imports: [CommonModule, IonicModule, UserTabMyAccountRoutingModule],
})
export class UserTabMyAccountModule {}
