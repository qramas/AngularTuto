import { Injectable } from '@angular/core';
import { Item } from "app/models/item";

@Injectable()
export class ItemService {

  public collection: Item[];

  constructor() {
    this.collection = [new Item({ reference: '1234', name: 'quentin', state: 0 })];
  }

  public add(item: Item): void {
    this.collection.unshift(item);
  }
 
}
