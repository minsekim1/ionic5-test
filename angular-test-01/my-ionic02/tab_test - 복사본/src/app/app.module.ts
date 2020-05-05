import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageModule } from './sign-in/sign-in.module';
import { MemoCreatePageModule } from './memo-create/memo-create.module';
import { MemoDetailPageModule } from './memo-detail/memo-detail.module';
import { MemoListPageModule } from './memo-list/memo-list.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    SignInPageModule,
    MemoCreatePageModule,
    MemoDetailPageModule,
    MemoListPageModule,
    
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
