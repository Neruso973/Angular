import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  @Input()
  developer: Developer = new Developer("", "", 0, false, "", []);
  
  constructor() {
}

  ngOnInit(): void {
  }

}
