import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  title = "Bonjour ";
  isAdmin: boolean = false;

  setIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
