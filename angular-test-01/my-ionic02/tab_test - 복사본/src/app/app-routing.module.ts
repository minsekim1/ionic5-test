import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'join-kakao',
    loadChildren: () => import('./login/join-kakao/join-kakao.module').then( m => m.JoinKakaoPageModule)
  },
  {
    path: 'join-naver',
    loadChildren: () => import('./login/join-naver/join-naver.module').then( m => m.JoinNaverPageModule)
  },
  {
    path: 'join-facebook',
    loadChildren: () => import('./login/join-facebook/join-facebook.module').then( m => m.JoinFacebookPageModule)
  },
  {
    path: 'join-google',
    loadChildren: () => import('./login/join-google/join-google.module').then( m => m.JoinGooglePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'memo-list',
    loadChildren: () => import('./memo-list/memo-list.module').then( m => m.MemoListPageModule)
  },
  {
    path: 'memo-detail',
    loadChildren: () => import('./memo-detail/memo-detail.module').then( m => m.MemoDetailPageModule)
  },
  {
    path: 'memo-create',
    loadChildren: () => import('./memo-create/memo-create.module').then( m => m.MemoCreatePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
