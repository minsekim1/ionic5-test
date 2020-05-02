import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

declare var AnyJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private anyjs : any;
       private method : any;

       constructor(public navCtrl: NavController) {
           this.anyjs = new AnyJS();
           this.method = this.anyjs.methodCall();
       }
  ngOnInit() {
  }

}
