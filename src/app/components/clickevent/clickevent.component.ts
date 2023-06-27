import { Component } from '@angular/core';

@Component({
  selector: 'app-clickevent',
  templateUrl: './clickevent.component.html',
  styleUrls: ['./clickevent.component.scss']
})
export class ClickeventComponent {

count:number=1;
  writeConsole(){
    console.log("click");
  }
  countMethod(){
this.count++;
//console.log(this.count.toString());
  }
}
