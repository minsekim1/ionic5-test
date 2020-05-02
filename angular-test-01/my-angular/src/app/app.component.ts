import { HeroesService } from './heroes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
//   <div>
//   <p>{{email}}</p>
//   <input [(ngModel)]="email" (keyup.enter)="email = $event.target.value"/>

//   {{title | uppercase | lowercase}}
  
//   <input (keyup.enter)="onKeyUp2($event)"/>
// </div>
// <courses></courses>

// `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'asdasdas';
  email: string = "Batman@gamil.com";
  onKeyUp2($event){
    console.log($event.target.value);
  }

  isSelected:boolean = false;
  onClick(){
    this.isSelected = !this.isSelected;
  }

  //////////////////////
  onKeyUp3(email){
    console.log(email);
    console.log(email.value);
  }
  onButton($event){
    $event.stopPropagation();
    console.log("This is event");
  }
  onInnerBlock(){
    console.log("This is Inner event");
  }
  onOuterBlock(){
    console.log("This is Outer event");
  }
  // heros: string[] = ["asd","asd"];
  // heros: {name:string}[] = [{name:"superman"}, {name:"batman"}];
  
  heroes;
  constructor(hero:HeroesService) {
    this.heroes = hero.Hero;
  }
  
  appButton() {
    console.log("asd");
  }


}