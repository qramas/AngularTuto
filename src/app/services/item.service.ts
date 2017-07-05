import { Injectable } from '@angular/core';
import { Item } from "app/models/item";

@Injectable()
export class ItemService {

  public newItem: Item;
  public collection: Item[];

  constructor() {
    this.collection = [new Item({ reference: '1234', name: 'quentin', state: 0 })];
    this.resetNewItem();
  }

  public add(item: Item): void {
    this.collection.unshift(item);
    this.resetNewItem();
  }
  public resetNewItem(): void {
    this.newItem = new Item({ reference: '', name: '', state: 0 });
  }
}
