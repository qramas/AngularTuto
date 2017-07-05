import { Injectable } from '@angular/core';
import { Item } from "app/models/item"; //4.1.1 import de item

@Injectable()
export class ItemService {

  public newItem: Item;//4.1.2 declaration variable newItem
  public collection: Item[]; //4.1.4 declaration collection en public
  //4.1.3 constructor avec appel de resetNewItem
  constructor() {
    this.collection = [new Item({ reference: '1234', name: 'quentin', state: 0 })];
    this.resetNewItem();
  }

  //4.1.5 fonction add
  public add(item: Item): void {
    this.collection.unshift(item);
    this.resetNewItem();
  }
  //4.1.6 fonction resetNewItem
  public resetNewItem(): void {
    this.newItem = new Item({ reference: '', name: '', state: 0 });
  }
}
