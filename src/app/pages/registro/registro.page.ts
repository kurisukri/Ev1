import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
Storage

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario=
  {
    username:'',
    password:'',
    activo:0
  }


  constructor(private storage:Storage) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.usuario);
    this.guardar(this.usuario);
  }

  async guardar(usr:Usuario)
  {
    await this.storage.set(usr.username.toString(), usr);
    console.log("--------Usuario agregado-----------")
  }
}
