import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinKakaoPage } from './join-kakao.page';

const routes: Routes = [
  {
    path: '',
    component: JoinKakaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinKakaoPageRoutingModule {}
