import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // logo=[{
  //   srcimagen: "../assets/images/te-llevo-app.png"
  // }]

  usuariox:string='';

  constructor(private activeroute:ActivatedRoute, private router:Router) { 
    this.activeroute.queryParams.subscribe(
      params => {
        if(this.router.getCurrentNavigation().extras.state){
          this.usuariox=this.router.getCurrentNavigation().extras.state.miusuario.username;
          console.log(this.usuariox);
        }
      }
    )
  }

}
