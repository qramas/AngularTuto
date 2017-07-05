import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemFormComponent } from './itemform.component';
import { ItemPipe } from 'app/pipes/item.pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleModule } from "app/title/title.module";           //1.4.2 importé TitleModule
import { Config } from "app/config"; //        1.10.1 import de Config
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemFormComponent,
    ItemPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TitleModule //1.4.1 declaration de TitleModule
  ],
  providers: [Config], //        1.10.2 ajout de Config dans providers.
  bootstrap: [AppComponent]
})
export class AppModule { }
