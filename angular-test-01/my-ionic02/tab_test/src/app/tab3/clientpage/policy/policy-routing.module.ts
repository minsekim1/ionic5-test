import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyPage } from './policy.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyPage
  },
  {
    path: 'policy1',
    loadChildren: () => import('./policy1/policy1.module').then( m => m.Policy1PageModule)
  },
  {
    path: 'policy2',
    loadChildren: () => import('./policy2/policy2.module').then( m => m.Policy2PageModule)
  },
  {
    path: 'policy3',
    loadChildren: () => import('./policy3/policy3.module').then( m => m.Policy3PageModule)
  },
  {
    path: 'policy4',
    loadChildren: () => import('./policy4/policy4.module').then( m => m.Policy4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyPageRoutingModule {}
