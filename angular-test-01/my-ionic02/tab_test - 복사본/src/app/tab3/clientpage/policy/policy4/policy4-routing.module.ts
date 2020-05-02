import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policy4Page } from './policy4.page';

const routes: Routes = [
  {
    path: '',
    component: Policy4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policy4PageRoutingModule {}
