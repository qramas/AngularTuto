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


  constructor() {
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.collection = [new Item({ reference: '1234', name: 'Quentin', state: 0 })];
  }
  /**
   *  getDetails()
   */
  public getDetailsApp(item: Item) {
    console.log(item)
  }


  /**
   * createObject
   */
  public createObject(newItem: Item) {
    this.collection.push(newItem);
  }

}
