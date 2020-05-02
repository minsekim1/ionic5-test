import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientpagePage } from './clientpage.page';

const routes: Routes = [
  {
    path: '',
    component: ClientpagePage
  },
  {
    path: 'change',
    loadChildren: () => import('./change/change.module').then( m => m.ChangePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientpagePageRoutingModule {}
