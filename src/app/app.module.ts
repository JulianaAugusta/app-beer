import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaCervejaComponent } from './components/lista-cerveja/lista-cerveja.component';
import { DetalheCervejaComponent } from './components/detalhe-cerveja/detalhe-cerveja.component';
import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';
import { UnidadeCervejaPipe } from './pipes/unidade-cerveja.pipe';
import { PontoEVirgulaPipe } from './pipes/ponto-e-virgula.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroCervejaPipe } from './pipes/filtro-cerveja.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ListaCervejaComponent,
    DetalheCervejaComponent,
    EspacoMoedaPipe,
    UnidadeCervejaPipe,
    PontoEVirgulaPipe,
    FiltroCervejaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
