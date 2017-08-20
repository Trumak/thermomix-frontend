import { Component, OnInit } from '@angular/core';
import {RecepiesCollection} from '../model/recepies_collection';
import { CollectionsService } from '../service/collections.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers:[CollectionsService]
})
export class CollectionComponent implements OnInit {

  collections: RecepiesCollection[];

  constructor(private collectionsService: CollectionsService) { }


  ngOnInit() {
    this.collectionsService.getCollections().subscribe(data => this.collections = data);
  }

}
