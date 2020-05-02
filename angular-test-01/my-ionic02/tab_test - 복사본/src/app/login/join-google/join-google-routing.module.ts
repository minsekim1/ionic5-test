import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinGooglePage } from './join-google.page';

const routes: Routes = [
  {
    path: '',
    component: JoinGooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinGooglePageRoutingModule {}
