import { RecepiesCollection } from '../model/recepies_collection';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionsService {

  constructor(private http: Http) { }

  public getCollections(): Observable<RecepiesCollection[]> {
    let url = '/api/collections';
    return this.http.get(url)
    .map((res: Response) => res.json().map((collection)  => {
    return new RecepiesCollection(collection.collectionName);
    })
    );
  }
}
