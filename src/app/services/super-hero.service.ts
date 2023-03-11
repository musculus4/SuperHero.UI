import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
   private url = "SuperHero";

  constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]> {
    return  this.http.get<SuperHero[]>('${enviroment.apiUrl}/${this.url}');
  }

  public updateHero(hero: SuperHero) : Observable<SuperHero[]> {
    return  this.http.put<SuperHero[]>(
      '${enviroment.apiUrl}/${this.url}', 
      hero
      );
  }

  public createHero(hero: SuperHero) : Observable<SuperHero[]> {
    return  this.http.post<SuperHero[]>(
      '${enviroment.apiUrl}/${this.url}', 
      hero
      );
  }

  public deleteSuperHeroe( hero: SuperHero) : Observable<SuperHero[]> {
    return  this.http.delete<SuperHero[]>(
      '${enviroment.apiUrl}/${this.url}/${hero.id}'
      );
  }
}
