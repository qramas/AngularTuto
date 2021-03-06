import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from "app/services/item.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private collection: Item[];

  constructor(public _ItemService: ItemService) {
  }

  ngOnInit(): void {
    this.collection = this._ItemService.collection;
  }
  /**
   * createObject
   */
  public createObject(newItem: Item) {
    this._ItemService.add(newItem);
  }

}
