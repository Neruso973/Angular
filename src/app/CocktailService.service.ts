import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      price: 4.5,
      img: 'https://thenovicechefblog.com/wp-content/uploads/2020/04/mojito-cocktail-recipe.jpeg',
    },
    {
      name: 'bloody Mary',
      price: 5,
      img: 'http://www.thelastfoodblog.com/wp-content/uploads/2017/06/Spicy-Bloody-Mary-2.jpg',
    },
    {
      name: 'Pina colada',
      price: 4,
      img: 'https://www.wineandglue.com/wp-content/uploads/2018/05/pina_colada_recipe_image-3.jpg',
    },
    {
      name: 'Ti Punch',
      price: 3,
      img: 'https://storenotrefamilleprod.blob.core.windows.net/images/cms/recette/34983/34983_large.jpg',
    },
  ];
  static cocktails: Cocktail;

  constructor() {}

  getCocktail() {
    return this.cocktails;
  }
}
