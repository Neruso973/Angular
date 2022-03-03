import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})


export class MyFormComponent implements OnInit {
  
 model: Order = new Order();
 
 constructor() { }
 
 ngOnInit(): void {
}

onSubmit() : void {
   // form submitted
    console.log(this.model);
}
}
