import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlramPage } from './alram.page';

const routes: Routes = [
  {
    path: '',
    component: AlramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlramPageRoutingModule {}
