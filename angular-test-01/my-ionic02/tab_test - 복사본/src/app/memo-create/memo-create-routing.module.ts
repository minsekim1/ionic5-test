import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoCreatePage } from './memo-create.page';

const routes: Routes = [
  {
    path: '',
    component: MemoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoCreatePageRoutingModule {}
