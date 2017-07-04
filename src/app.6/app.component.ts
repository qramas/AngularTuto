import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: any;
  private newItem: { reference: string, name: string, state: number }; // 6.2.1 déclaration de newItem


  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    this.collection = [
      { reference: '1234', name: 'Séverine', state: 0 },
      { reference: '2341', name: 'Paul', state: 1 },
      { reference: '3412', name: 'Jérem', state: 2 }
    ];
    this.resetNewItem(); //        6.2.2 initialiser newItem dans le Constructor         6.2.5 use resetNewItem pour init newItem dans le  Constructor et vider l'object dans createObject


  }

  /**
   *  getDetails()
   */
  public getDetails(event: Event, param: string) {
    let elem = event.currentTarget || event.target || event.srcElement;
  }

  //6.2.3 créer fonction createObject qui fait un push dans la collection

  /**
   * createObject
   */
  public createObject() {
    let object = { reference: '7856', name: 'Loïc', state: 0 };
    this.collection.push(this.newItem);
    this.resetNewItem();
  }

  //  6.2.4 créer la fonction resetNewItem pour vider l'objet newItem après l'ajout.

  /**
   * resetNewItem
   */
  public resetNewItem() {
    this.newItem = { reference: '', name: '', state: 0 };

  }
}
