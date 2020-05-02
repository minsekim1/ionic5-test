import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'question',
    loadChildren: () => import('./clientpage/question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'clientpage',
    loadChildren: () => import('./clientpage/clientpage/clientpage.module').then( m => m.ClientpagePageModule)
  },
  {
    path: 'alram',
    loadChildren: () => import('./clientpage/alram/alram.module').then( m => m.AlramPageModule)
  },
  {
    path: 'appversion',
    loadChildren: () => import('./clientpage/appversion/appversion.module').then( m => m.AppversionPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./clientpage/policy/policy.module').then( m => m.PolicyPageModule)
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
