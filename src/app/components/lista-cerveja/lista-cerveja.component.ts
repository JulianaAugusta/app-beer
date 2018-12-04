import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cerveja',
  templateUrl: './lista-cerveja.component.html',
  styleUrls: ['./lista-cerveja.component.css']
})
export class ListaCervejaComponent implements OnInit
{
  titulo: string = ''
  showImage: boolean = false
  // cervejas: any = []
  cervejas: any = [
    {
      "id": 1,
      "nome": "Indica Colorado",
      "familia": "IPA",
      "litragem": 600,
      "preco": 15.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/169389-1000-1000/ColoradoIndica1000x1000.jpg?v=636542262631100000",
      "data": "2010-11-09",
      "ranking": 4.9,
      "unidade": "L"
    },
    {
      "id": 2,
      "nome": "Cauim Colorado",
      "familia": "ALE",
      "litragem": 300,
      "preco": 6.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/171330-1000-1000/Cauim.gif?v=636643219616730000",
      "data": "2016-10-10",
      "ranking": 3.8,
      "unidade": "mL"
    },
    {
      "id": 3,
      "nome": "Appia Colorado",
      "familia": "ALE",
      "litragem": 600,
      "preco": 11.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/169375-1000-1000/ColoradoAppia1000x1000.jpg?v=636538020330630000",
      "data": "2009-12-10",
      "ranking": 2,
      "unidade": "L"
    },
    {
      "id": 4,
      "nome": "Gabiru Colorado",
      "familia": "IPA",
      "litragem": 600,
      "preco": 17.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/172094-1000-1000/01.jpg?v=636704778305900000",
      "data": "2012-04-04",
      "ranking": 1,
      "unidade": "mL"
    }
  ];

  constructor() { }//só instacia

  ngOnInit() {//instancia e faz
    console.log(this.cervejas);
  }
  mostrarImagens(){
    this.showImage = !this.showImage;
    console.log(this.showImage)
  }
  OnAlert(nome: string){

  }
}
