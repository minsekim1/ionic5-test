import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage  {
  emailAddress: string;
  password: string;

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }

  onChangeEmailAddress(event: any) {
    this.emailAddress = event.target.value;
  }

  onChangePassword(event: any) {
    this.password = event.target.value;
  }
  
}
