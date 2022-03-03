import { Component, OnInit } from '@angular/core';
import { Singup } from '../sing-up';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  model: Singup = new Singup();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model);
  }

}
