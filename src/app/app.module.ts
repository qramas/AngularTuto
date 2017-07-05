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
        //1.4.2 importé TitleModule
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
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
