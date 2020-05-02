import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policy2Page } from './policy2.page';

const routes: Routes = [
  {
    path: '',
    component: Policy2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policy2PageRoutingModule {}
