import { MethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../Cocktail';
import { CocktailServiceService } from '../CocktailService.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private cocktailServiceService: CocktailServiceService) {}

  ngOnInit(): void {}

  showCocktail() {
    this.cocktails = this.cocktailServiceService.getCocktail();
  }
}
