import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../Cocktail';
import { CocktailService } from '../Cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  public  cocktails:Array<Cocktail>  =  [];
  private  service:CocktailService;

  constructor( param_service:CocktailService ){
      this.service  =  param_service;
  }

  public ngOnInit(){
      this.service.getCocktail().subscribe(
          (param_data:Array<Cocktail>) => {
              this.cocktails  =  param_data;
          }
      );
  }
}