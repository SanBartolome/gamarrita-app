import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTabSearchRoutingModule } from './user-tab-search-routing.module';
import { UserTabSearchComponent } from './user-tab-search.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserTabSearchComponent],
  imports: [CommonModule, IonicModule, UserTabSearchRoutingModule],
})
export class UserTabSearchModule {}
