import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from "app/services/item.service";//  4.3.1 import de ItemService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private collection: Item[];

  constructor(public _ItemService: ItemService) {//4.3.2 injection ItemService dans constructor
  }

  ngOnInit(): void {//  4.3.3 dans ngOnInit on initialise collection depuis ItemService
    this.collection = this._ItemService.collection;
  }
  /**
   * createObject
   */
  public createObject(newItem: Item) {//  4.3.4 dans create object on utilise add de ItemService
    this._ItemService.add(newItem);
  }

}
