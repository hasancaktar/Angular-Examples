import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchangehook',
  templateUrl: './ngonchangehook.component.html',
  styleUrls: ['./ngonchangehook.component.scss']
})
export class NgonchangehookComponent implements OnInit,OnChanges{
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

@Input() count:string|undefined |number; 


}
