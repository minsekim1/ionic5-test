import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppversionPageRoutingModule } from './appversion-routing.module';

import { AppversionPage } from './appversion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppversionPageRoutingModule
  ],
  declarations: [AppversionPage]
})
export class AppversionPageModule {}
