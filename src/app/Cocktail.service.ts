import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from './Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getCocktail(): Observable<Array<Cocktail>> {
    const cocktail: Observable<any> = this.service.get('../assets/cocktails.json');
    return cocktail
  }
}
