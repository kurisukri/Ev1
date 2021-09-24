import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {

  usuario={
    username:'',
    password:'',
  }

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario.username + " " + this.usuario.password);


    if(this.usuario.username=="pepito" && this.usuario.password=="duoc123")
    {
      //inicio
      console.log(this.usuario.username + " " + this.usuario.password);
      let navextras:NavigationExtras=
      {
        state : {
          miusuario:this.usuario
        }
      }

      this.router.navigate(['/lista'],navextras);

    }
      else {
      this.presentAlert();
      }
    
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
