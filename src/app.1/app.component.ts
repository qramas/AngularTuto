import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //1.1 : app.component.ts : title -> private + typage et ajout d'une variable version private. 
  private title: string;
  private version: string;

  //Constructor init variable.
  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
  }
}
