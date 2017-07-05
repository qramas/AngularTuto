import { Component, OnInit } from '@angular/core';
import { Config } from "app/config"; 

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  private title: string;
  constructor(public _Config: Config) { 
  }

  ngOnInit() {
    this.title = this._Config.APP_TITLE;
  }

}
