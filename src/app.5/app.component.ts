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

  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    this.collection = [
      { reference: '1234', name: 'Séverine', state: 0 },
      { reference: '2341', name: 'Paul', state: 1 },
      { reference: '3412', name: 'Jérem', state: 2 }
    ]
  }

  /**
   * 5.2.1 créer la fonction getDetails()
        5.2.2 Récupérer $event et afficher dans console
        5.2.3 pour Récupérer la valeur de l'attribut ID  et l'élement html à l'origine du click
            Variable elem pur Récupérer  l'élement à l'origine du click
        5.2.4 affichage de l'élément Récupérer (button)
        5.2.5 affichage de la valeur de l'id à partir de elem.
        5.2.6 affichage deuxieme argument. 
   */
  public getDetails(event: Event, param: string) {
    console.log(event);
    let elem = event.currentTarget || event.target || event.srcElement;
    console.log(elem);
    console.log(elem["id"]);
    console.log(param);
  }
}
