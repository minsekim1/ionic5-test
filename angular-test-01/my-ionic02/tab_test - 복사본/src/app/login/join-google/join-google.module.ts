import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinGooglePageRoutingModule } from './join-google-routing.module';

import { JoinGooglePage } from './join-google.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinGooglePageRoutingModule
  ],
  declarations: [JoinGooglePage]
})
export class JoinGooglePageModule {}
