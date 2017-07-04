import { Component } from '@angular/core';
import { Item } from 'app/models/item';
import { Config } from 'app/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: Item[];
  private newItem: Item;


  constructor() {
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.collection = [
      new Item({ reference: '1234', name: 'Séverine', state: 0 }),
      new Item({ reference: '2341', name: 'Paul', state: 1 }),
      new Item({ reference: '3412', name: 'Jérem', state: 2 })
    ];
    this.resetNewItem();
  }
  //        11.2.1 modifier getDetails() pour Récupérer et afficher l'item dans la console

  /**
   *  getDetails()
   */
  public getDetailsApp(item: Item) {
    console.log(item)
  }


  /**
   * createObject
   */
  public createObject() {
    let object = { reference: '7856', name: 'Loïc', state: 0 };
    this.collection.push(this.newItem);
    this.resetNewItem();
  }
  /**
   * resetNewItem
   */
  public resetNewItem() {
    this.newItem = new Item({ reference: '', name: '', state: 0 });
  }
}
