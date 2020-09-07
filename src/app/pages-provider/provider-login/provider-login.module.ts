import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderLoginRoutingModule } from './provider-login-routing.module';
import { ProviderLoginComponent } from './provider-login.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProviderLoginComponent],
  imports: [CommonModule, ProviderLoginRoutingModule, IonicModule],
})
export class ProviderLoginModule {}
