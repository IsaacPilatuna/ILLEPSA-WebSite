import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NavBarComponent } from './body/nav-bar/nav-bar.component';
import { InicioComponent } from './body/inicio/inicio.component';
import { ProductosComponent } from './body/productos/productos.component';
import { SociosComponent } from './body/socios/socios.component';
import { ContactosComponent } from './body/contactos/contactos.component';
import { MiCuentaComponent } from './body/mi-cuenta/mi-cuenta.component';
import { PedidosComponent } from './body/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavBarComponent,
    InicioComponent,
    ProductosComponent,
    SociosComponent,
    ContactosComponent,
    MiCuentaComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
