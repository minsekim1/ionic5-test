import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Policy3PageRoutingModule } from './policy3-routing.module';

import { Policy3Page } from './policy3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Policy3PageRoutingModule
  ],
  declarations: [Policy3Page]
})
export class Policy3PageModule {}
