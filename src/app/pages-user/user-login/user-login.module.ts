import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [CommonModule, UserLoginRoutingModule, IonicModule],
})
export class UserLoginModule {}
