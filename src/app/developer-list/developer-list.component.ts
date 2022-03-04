import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.scss']
})
export class DeveloperListComponent implements OnInit {

  nelson: Developer = new Developer("Nelson", "NTEPP", 27, true, "coucou", [new Skill("JS", "JS", "JS")] )
  pilou: Developer = new Developer("Pilou", "Pilou", 26, true, "coucou Pilou", [new Skill("Angular", "A", "TS")] )
  Arnaud: Developer = new Developer("Nono", "lfvr", 28, true, "@@@", [new Skill("React", "R", "surtout pas TS")] )

  developers: Developer[] =  []
 
  
  
  constructor() {
 }

  ngOnInit(): void {
    this.developers.push(this.nelson, this.pilou, this.Arnaud)
  }

  catchData(dev: Developer) : void {
    console.log(dev)
  }

}
