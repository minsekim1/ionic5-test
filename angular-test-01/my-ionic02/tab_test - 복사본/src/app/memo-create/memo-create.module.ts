import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoCreatePageRoutingModule } from './memo-create-routing.module';

import { MemoCreatePage } from './memo-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoCreatePageRoutingModule
  ],
  declarations: [MemoCreatePage]
})
export class MemoCreatePageModule {}
