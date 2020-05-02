import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinNaverPageRoutingModule } from './join-naver-routing.module';

import { JoinNaverPage } from './join-naver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinNaverPageRoutingModule
  ],
  declarations: [JoinNaverPage]
})
export class JoinNaverPageModule {}
