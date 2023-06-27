import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
names:string[]=["hasan","ali","mehmet"]

userList:User[]=[];

constructor(){
  this.userList.push(new User(1,"hasan","mail@mail.com"));
  this.userList.push(new User(2,"mehmet","mail@mail.com"));
  this.userList.push(new User(3,"ali","mail@mail.com"));

}
}
