import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  circular=true;
  proveedores= [
    { nombre: 'Cervecería Nacional', imagen: 'cerveceria-nacional.jpg  ', descripcion:'Somos una compañía de dueños.\nCreemos que obtenemos aquello por lo que trabajamos\nNos esforzamos para ser los mejores,\nPersiguiendo nuestro sueño,\nComprometidos con mejorar la vida de más gente en más comunidades.'},
    { nombre: 'Pilsener', imagen: 'pilsener.png', descripcion:'Descubre la cerveza Pilsener, perfecta para acompañar tus mejores momentos y celebraciones.'},
    { nombre: 'COLDS', imagen: 'colds.jpg', descripcion:'Una perfecta combinación que se caracteriza por su textura suave y cremosa de la crema de leche que junto con sus diferentes combinaciones se fusiona en el paladar dando el buque perfecto.'}
  ];

  
  distribuidores= [
    { nombre: 'La Bombonera', imagen: 'la_bombonera.jpg', descripcion:'Anímate! Escríbenos, pregunta por nuestras ofertas y grandes precios, después espera a domicilio tu pedido sin ningún cargo extra Solo en La Bombonera'},
    { nombre: 'Distribuidora eco1', imagen: 'eco_1.jpg', descripcion:'Tienda de vinos, cervezas y licores'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
