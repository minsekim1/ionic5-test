import { Component, Output, Input } from "@angular/core";
import { EventEmitter } from 'protractor';

@Component({
    selector: 'luke',
    template: `
        <p>I'am King</p>
    `
})

export class LukeComponent{
@Input() lukeInput
received: string;
@Output() lukeOutput
cild = new EventEmitter;

ngOnInit() {
    this.cild.emit('welcome to mom');
  }
}