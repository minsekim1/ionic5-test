import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Policy4PageRoutingModule } from './policy4-routing.module';

import { Policy4Page } from './policy4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Policy4PageRoutingModule
  ],
  declarations: [Policy4Page]
})
export class Policy4PageModule {}
