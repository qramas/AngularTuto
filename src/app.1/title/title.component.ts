import { Component, OnInit } from '@angular/core';
import { Config } from "app/config"; //        1.7.2 import de Config

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  private title: string;//1.7.3 private title dans la classe
  constructor(public _Config: Config) { //1.7.1 injecter Config dans le constructor
  }

  ngOnInit() {
    this.title = this._Config.APP_TITLE; //1.7.4 init title dans ngOnInit
  }

}
