import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinFacebookPage } from './join-facebook.page';

const routes: Routes = [
  {
    path: '',
    component: JoinFacebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinFacebookPageRoutingModule {}
