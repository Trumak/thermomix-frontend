import { Recipe } from '../model/recipe';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RecipiesService {


  constructor(private http: Http) { }

  public getRecipesOfCollection(collectionGuid: string): Observable<Recipe[]> {
    let url = '';
    return this.http.get(url)
      .map((res: Response) => res.json().results.map(item => {
        return new Recipe(item.guid, item.name);
      })
      );
  }

}
