import { Component, OnInit } from '@angular/core'; 
import { Item } from './models/item';
import { Config } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private collection: Item[];

  constructor() {
  }

  ngOnInit(): void { 
    this.collection = Config.APP_COLLECTION;
  }
  /**
   * createObject
   */
  public createObject(newItem: Item) {
    this.collection.unshift(newItem);
  }

}
