import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EncabezadoComponent],
  exports:[EncabezadoComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
