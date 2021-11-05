
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/categorias';
import { ComidasService } from '../../services/comidas.service';


@Component({
  selector: 'app-tipocomidas',
  templateUrl: './tipocomidas.page.html',
  styleUrls: ['./tipocomidas.page.scss'],
})
export class TipocomidasPage implements OnInit {

  comidas:Meal[]=[];
  tipo:string='';
  constructor(private srvcomidas:ComidasService) { }

  ngOnInit() {
    this.srvcomidas.getComidasxTipo("Vegan").subscribe(datos=>
      {
        //this.comidas.push(...datos.meals);
        //console.log(this.comidas);
        console.log(datos);      
      });
  }

}
