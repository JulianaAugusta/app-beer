import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaCervejaComponent } from './components/lista-cerveja/lista-cerveja.component';
import { DetalheCervejaComponent } from './components/detalhe-cerveja/detalhe-cerveja.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCervejaComponent,
    DetalheCervejaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
