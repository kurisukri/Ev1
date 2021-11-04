import { Component } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones:Opmenu[]=[
    {
      link:"home",
      texto:"home",
      icono:"home"
    }
    ,
    {
      link:"ingreso-usuario",
      texto:"Iniciar Sesión",
      icono:"person"
    }
    ,
    {
      link:"restablecer-pass",
      texto:"Recuperar Password",
      icono:"bulb-outline"
    }
    
  ]  
  constructor(private storage:Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

}
