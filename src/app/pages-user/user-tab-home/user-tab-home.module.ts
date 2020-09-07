import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTabHomeRoutingModule } from './user-tab-home-routing.module';
import { UserTabHomeComponent } from './user-tab-home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserTabHomeComponent],
  imports: [CommonModule, IonicModule, UserTabHomeRoutingModule],
})
export class UserTabHomeModule {}
