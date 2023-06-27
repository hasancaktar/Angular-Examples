import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {

  isLarge=true;
  isRedBox=true;
  isBlueBorder=true;
  css:any={large:true,redBox:true,blueBorder:true}

  applyClass(){
this.isLarge=!this.isLarge
this.isBlueBorder=!this.isBlueBorder
this.isRedBox=!this.isRedBox
this.css={large:this.isLarge,redBox:this.isRedBox,blueBorder:this.isBlueBorder}
}
}
