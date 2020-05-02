import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlramPageRoutingModule } from './alram-routing.module';

import { AlramPage } from './alram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlramPageRoutingModule
  ],
  declarations: [AlramPage]
})
export class AlramPageModule {}
