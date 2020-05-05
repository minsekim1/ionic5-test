import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoDetailPage } from './memo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MemoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoDetailPageRoutingModule {}
