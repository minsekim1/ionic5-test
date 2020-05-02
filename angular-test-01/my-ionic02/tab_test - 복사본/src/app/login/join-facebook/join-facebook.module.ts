import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinFacebookPageRoutingModule } from './join-facebook-routing.module';

import { JoinFacebookPage } from './join-facebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinFacebookPageRoutingModule
  ],
  declarations: [JoinFacebookPage]
})
export class JoinFacebookPageModule {}
