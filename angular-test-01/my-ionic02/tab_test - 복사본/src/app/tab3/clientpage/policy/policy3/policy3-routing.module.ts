import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policy3Page } from './policy3.page';

const routes: Routes = [
  {
    path: '',
    component: Policy3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policy3PageRoutingModule {}
