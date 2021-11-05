import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario, Sesion } from '../../interfaces/usuario';


@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {

  user={
    username:'',
    password:'',
    activo:0
  }

  

  constructor(private alertController:AlertController, private router:Router, private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit(){

    this.validarusuario(this.user);
  }

  async validarusuario(u:Usuario)
  {
    let usuario=await this.storage.get(u.username);
    if(usuario!=null)
    {
      if(u.password == usuario.password)
      {
        console.log("Todo bien todo correcto");
        await this.storage.set('sesion',1);
        this.router.navigate(['./lista']);
        return
          
      }
      
    }
    console.log("Todo Mal");
    this.presentAlert();
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos Incorrectos',
      subHeader: 'llamando a la policía...',
      message: 'Intente Nuevamente',
      buttons: ['OK']
    });

    await alert.present();
  }

}
