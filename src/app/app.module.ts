import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaCervejaComponent } from './lista-cerveja/lista-cerveja.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCervejaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
