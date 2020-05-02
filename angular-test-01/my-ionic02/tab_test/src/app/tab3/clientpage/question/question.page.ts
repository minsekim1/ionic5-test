import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  constructor(public composer:EmailComposer) { }

  ngOnInit() {
  }
  OpenEamilComposer(){
    this.composer.open({
      to:'tkarnrwl7862@naver.com'
    })
  }
}
