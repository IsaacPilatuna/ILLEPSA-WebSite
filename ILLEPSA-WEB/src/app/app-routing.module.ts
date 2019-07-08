import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './body/inicio/inicio.component';
import { ContactosComponent } from './body/contactos/contactos.component';
import { MiCuentaComponent } from './body/mi-cuenta/mi-cuenta.component';
import { PedidosComponent } from './body/pedidos/pedidos.component';
import { ProductosComponent } from './body/productos/productos.component';
import { SociosComponent } from './body/socios/socios.component';
import { RutaNoEncontradaComponent } from './body/ruta-no-encontrada/ruta-no-encontrada.component';
import { HistoriaComponent } from './body/historia/historia.component';

const routes: Routes = [
  
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
     path: 'home',
     component: InicioComponent
  },
  {
     path: 'contactos',
     component: ContactosComponent
  },
  {
     path: 'cuenta',
     component: MiCuentaComponent
  },
  {
     path: 'historia',
     component: HistoriaComponent
  },
  {
     path: 'productos',
     component: ProductosComponent
  },
  {
     path: 'socios',
     component: SociosComponent
  },
  {
     path: 'pedidos',
     component: PedidosComponent
  },
  { 
    path: '**', 
    component: RutaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
