import { Category } from './../../interfaces/categorias';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComidasService } from '../../services/comidas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  // logo=[{
  //   srcimagen: "../assets/images/te-llevo-app.png"
  // }]

  categorias:Category[]=[];

  constructor(private comidaservice:ComidasService){}

  ngOnInit()
  {
    this.comidaservice.getCategorias().subscribe(resp=>
      {
        //console.log('categorias',resp.categories);
        this.categorias.push(...resp.categories); //push: colocar elemento al final del arreglo
        console.log("Mi arreglo: ", this.categorias);
      })
  }
}
