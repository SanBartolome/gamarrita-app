import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomeComponent } from './user-home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, UserHomeRoutingModule, IonicModule],
})
export class UserHomeModule {}
