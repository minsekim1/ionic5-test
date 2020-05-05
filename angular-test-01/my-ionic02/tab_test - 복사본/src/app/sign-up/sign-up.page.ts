import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  navCtrl: NavController;

  constructor() { }

  ngOnInit() {
  }

  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }

  onClickSignUp() {
    this.navCtrl.pop;    
  }

  onClickNavBack() {
    this.navCtrl.pop;
  }
  
}
