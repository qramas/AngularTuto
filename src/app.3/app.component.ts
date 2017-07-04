import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: Item[];

  constructor() {
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.collection = Config.APP_COLLECTION;
  }

  /**
   * createObject
   */
  public createObject(newItem: Item) {
    this.collection.unshift(newItem);//        3.1.2 remplacer push par unshift
    setTimeout(() => { //        3.1.1 ajouter un setTimeOut dans createObject qui passe à l'état removed après 2s

      newItem.animateState = 'removed';
    }, 2000);
  }

}
