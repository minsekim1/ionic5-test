import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinKakaoPageRoutingModule } from './join-kakao-routing.module';

import { JoinKakaoPage } from './join-kakao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinKakaoPageRoutingModule
  ],
  declarations: [JoinKakaoPage]
})
export class JoinKakaoPageModule {}
