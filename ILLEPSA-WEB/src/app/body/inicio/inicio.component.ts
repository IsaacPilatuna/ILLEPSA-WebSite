import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ofertas= [
    { nombre: 'Amaretto', imagen: 'amareto.jpg  ', precio:20.75},
    { nombre: 'Triple Sec', imagen: 'triplesec.jpg', precio:15.85},
    { nombre: 'CCORI PASION LE PARFUM', imagen: 'CCORI.jpg', precio:18.75},
    { nombre: 'CCORI LE PARFUM', imagen: 'ccori-gold.jpg', precio:12.50},
    { nombre: 'Curacao', imagen: 'curacao.jpg', precio:22.90},
    { nombre: 'Cacao', imagen: 'cacao.jpg', precio:23.55}
  ];

  
  nuevos= [
    { nombre: 'Menta', imagen: 'menta.jpg', precio:30.69},
    { nombre: 'OSADÍA EAU DE PARFUM', imagen: 'osadia.jpg', precio:15.25},
    { nombre: 'Cafe', imagen: 'cafe.jpg', precio:24.99},
    { nombre: 'CORI ROSE LE PARFUM', imagen: 'ccori-rose.jpg', precio:7.99},
    { nombre: 'SER EAU DE PARFUM', imagen: 'ser-eau.jpg', precio:13.69},
    { nombre: 'MISS AMOUR EAU DE PARFUM', imagen: 'miss-amour.jpg', precio:25.85}
  ];
  constructor() { }

  ngOnInit() {
  }

}
