import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  //        2.1.1 declaration collection dans la classe.

  private collection: any;

  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    //        2.1.2 init collection dans Constructor.

    this.collection = [
      { reference : '1234', name : 'Séverine'},
      {reference : '1234', name : 'Paul'},
      {reference : '1234', name : 'Jérem'}
    ]
  }
}
