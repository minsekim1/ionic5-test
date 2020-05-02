import { Component } from "@angular/core";

@Component({
    selector: 'darth',
    template: `
        <luke #luke [lukeInput]="darthData" (lukeOutput)="darthMethod(luke.lukeInput)"></luke>
    `
})

export class DarthComponent{
    darthData: string ="내가니애비다."

    darthMethod(luck){
        console.log(luck);
        
    }
}