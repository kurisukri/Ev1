import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-usuario',
    loadChildren: () => import('./pages/ingreso-usuario/ingreso-usuario.module').then( m => m.IngresoUsuarioPageModule)
  },
  {
    path: 'restablecer-pass',
    loadChildren: () => import('./pages/restablecer-pass/restablecer-pass.module').then( m => m.RestablecerPassPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
