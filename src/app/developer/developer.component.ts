import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  @Input()
  developer: Developer = new Developer("", "", 0, false, "", []);

  @Output() 
  sendDevelopper: EventEmitter<Developer> = new EventEmitter()

  
  constructor() {
}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.sendDevelopper.emit(this.developer);
  }

}
