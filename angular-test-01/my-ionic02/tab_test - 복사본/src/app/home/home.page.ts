import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(public alertController: AlertController) {} async presentAlert() { const alert = await this.alertController.create({ header: 'Alert', subHeader: '제목', message: '내용.', buttons: ['확인'] }); await alert.present(); }

  ngOnInit() {
  }
}
