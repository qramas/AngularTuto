import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemFormComponent } from './itemform.component';
import { ItemPipe } from 'app/pipes/item.pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleModule } from "app/title/title.module";
import { Config } from "app/config";
import { HighlightDirective } from './directives/highlight.directive';
import { ItemService } from "app/services/item.service"; // 4.2.2 import de ItemService

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemFormComponent,
    ItemPipe,
    HighlightDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TitleModule
  ],
  providers: [Config, ItemService], //4.2.1 declaration ItemService dans les providers.
  bootstrap: [AppComponent]
})
export class AppModule { }
