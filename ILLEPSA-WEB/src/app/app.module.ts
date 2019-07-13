import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './body/nav-bar/nav-bar.component';
import { InicioComponent } from './body/inicio/inicio.component';
import { ProductosComponent } from './body/productos/productos.component';
import { SociosComponent } from './body/socios/socios.component';
import { ContactosComponent } from './body/contactos/contactos.component';
import { MiCuentaComponent } from './body/mi-cuenta/mi-cuenta.component';
import { PedidosComponent } from './body/pedidos/pedidos.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { RutaNoEncontradaComponent } from './body/ruta-no-encontrada/ruta-no-encontrada.component';
import { HistoriaComponent } from './body/historia/historia.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    InicioComponent,
    ProductosComponent,
    SociosComponent,
    ContactosComponent,
    MiCuentaComponent,
    PedidosComponent,
    HeaderAdminComponent,
    RutaNoEncontradaComponent,
    HistoriaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
