import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  myDate = new Date();
  price:number=1200;
  person1:Person=  {firstName:"hasan",lastName:"san",age:12}

  constructor(){}

  //bir hook'tur ctor'dan sonra çalışır
ngOnInit():void{

}
}

interface Person{
  firstName:string,
  lastName:string,
  age:number,
}