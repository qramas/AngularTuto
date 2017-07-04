import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemFormComponent } from './itemform.component';
import { ItemPipe } from 'app/pipes/item.pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //2.4.1 imports de BrowerAnimationsModule
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
    BrowserAnimationsModule //2.4.2 déclarer BrowerAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
