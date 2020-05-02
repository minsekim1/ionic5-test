import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  Hero: string[] = ["superman", "batman", "spiderman"];
  constructor() { }
}
