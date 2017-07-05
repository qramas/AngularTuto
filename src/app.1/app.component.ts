import { Component, OnInit } from '@angular/core'; //1.9.2 import de OnInit
import { Item } from './models/item';
import { Config } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {//1.9.1 implémente OnInit

  private collection: Item[];

  constructor() {
  }

  ngOnInit(): void { //1.9.3 implémentation interface ngOnInit
    this.collection = Config.APP_COLLECTION;//1.9.4 init variable dans ngOnInit
  }
  /**
   * createObject
   */
  public createObject(newItem: Item) {
    this.collection.unshift(newItem);
    //        1.12.1 supprimer les setTimeOut dans createObject

  }

}
