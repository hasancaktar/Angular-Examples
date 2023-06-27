import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {

  isShow:boolean=true;

  showHide(){
this.isShow=!this.isShow;
}
}
