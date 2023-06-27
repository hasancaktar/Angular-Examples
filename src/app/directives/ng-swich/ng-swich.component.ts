import { Component } from '@angular/core';
import { Product, Type } from 'src/app/models/product';

@Component({
  selector: 'app-ng-swich',
  templateUrl: './ng-swich.component.html',
  styleUrls: ['./ng-swich.component.scss']
})
export class NgSwichComponent {
product:Product

constructor(){
  this.product=new Product(1,"ürün 1",Type.Big);
  this.product=new Product(2,"ürün 2",Type.Middle);
  this.product=new Product(2,"ürün 2",Type.Small);
}
}
