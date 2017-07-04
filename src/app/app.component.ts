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
    this.collection.unshift(newItem);
    setTimeout(() => {
      newItem.animateState = 'removed';
    }, 2000);
    setTimeout(() => { //4.4.1 Ajout d'un setTimeOut pour passer l'état à removedFromDom après 3s
      newItem.animateState = 'removedFromDom';
    }, 3000);
  }

}
