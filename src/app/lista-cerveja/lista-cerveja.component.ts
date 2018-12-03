import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cerveja',
  templateUrl: './lista-cerveja.component.html',
  styleUrls: ['./lista-cerveja.component.css']
})
export class ListaCervejaComponent implements OnInit
{
  titulo: string = 'Lista de Cervejas:'
  constructor() { }

  ngOnInit() {
  }

}
