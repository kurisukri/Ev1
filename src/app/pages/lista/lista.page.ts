import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {


  personas=[
    {
      nombre:"Jorge",
      apellido:"Melgarejo",
      srcimagen: "../assets/images/jorge.png"
    }
    ,
    {
      nombre:"Cristian",
      apellido:"Varela",
      srcimagen: "../assets/images/varela.png"
    }
    ,
    {
      nombre:"Patito",
      apellido:"Ezpinoza",
      srcimagen: "../assets/images/pato.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
