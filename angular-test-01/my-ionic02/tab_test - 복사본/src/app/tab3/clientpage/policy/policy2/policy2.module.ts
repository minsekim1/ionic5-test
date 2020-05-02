import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Policy2PageRoutingModule } from './policy2-routing.module';

import { Policy2Page } from './policy2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Policy2PageRoutingModule
  ],
  declarations: [Policy2Page]
})
export class Policy2PageModule {}
