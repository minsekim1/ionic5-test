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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
