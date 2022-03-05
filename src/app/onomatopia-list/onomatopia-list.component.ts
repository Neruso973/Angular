import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onomatopia-list',
  templateUrl: './onomatopia-list.component.html',
  styleUrls: ['./onomatopia-list.component.scss']
})
export class OnomatopiaListComponent implements OnInit {

  onomatopoeias: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onReceiveNewOnomatopia(receiveNewOnomatopia : string): void {
    this.onomatopoeias.push(receiveNewOnomatopia)
  }

}
