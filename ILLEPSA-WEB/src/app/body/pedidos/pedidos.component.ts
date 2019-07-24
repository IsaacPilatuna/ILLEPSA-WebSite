import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private readonly _loginService:LoginServiceService) { }
  usuario={
    nombreCompleto:'Isaac Salomón Pilatuña Zambrano',
    identificacion:'1723744445',
    empresa:'EPN',
    ruc:'1723744445001'
  }
  total=0;
  productos= [
    { nombre: 'Amaretto',  precio:20.75},
    { nombre: 'Triple Sec',  precio:15.85},
    { nombre: 'Curacao',  precio:22.99},
    { nombre: 'Menta',  precio:30.69},
    { nombre: 'Cafe',  precio:24.99},
    { nombre: 'Cacao',  precio:23.55},
    { nombre: 'CCORI PASION LE PARFUM', precio:18.75},
    { nombre: 'OSADÍA EAU DE PARFUM',  precio:15.25},
    { nombre: 'CORI ROSE LE PARFUM',  precio:7.99},
    { nombre: 'CCORI LE PARFUM',  precio:12.55},
    { nombre: 'SER EAU DE PARFUM',  precio:13.69},
    { nombre: 'MISS AMOUR EAU DE PARFUM',  precio:25.85}
  ];

  productosAgregados=[
  ]
  
  ngOnInit() {
    this.usuario=this._loginService.usuarioLogeado;
  }

  agregarProducto(nombre:string,precio:number){
    const index=this.productosAgregados.findIndex(x=>x.nombre==nombre);
    console.log(index);
    
    if(index==-1){
      this.agregarNuevoItem(nombre,precio);
    }else{
      this.sumarUnoAlItem(index,precio);
    }
    console.log(this.productosAgregados);

  }

  sumarUnoAlItem(index:number,precio:number){
    var itemProducto=this.productosAgregados[index];
    itemProducto.cantidad+=1;
    itemProducto.precioTotal+=precio;
    itemProducto.precioTotal=parseFloat(itemProducto.precioTotal.toFixed(2));
    this.productosAgregados[index]=itemProducto;
    this.total+=precio;
    this.total=parseFloat(this.total.toFixed(2));
  }

  agregarNuevoItem(nombreInput:string,precioInput:number){
    const itemProducto={
      nombre:nombreInput,
      precio:precioInput,
      cantidad:1,
      precioTotal:precioInput
    }
    this.productosAgregados.push(itemProducto);
    this.total=this.total+precioInput;
    this.total=parseFloat(this.total.toFixed(2));
  }

  restarProducto(nombre:string,precio:number){
    var index=this.productosAgregados.findIndex(x=>x.nombre==nombre);
    console.log(precio);
    var producto=this.productosAgregados[index];
    producto.cantidad-=1;
    producto.precioTotal-=precio;
    producto.precioTotal=parseFloat(producto.precioTotal.toFixed(2));
    this.productosAgregados[index]=producto;
    console.log(this.productosAgregados);
    this.total-=precio;
    this.total=parseFloat(this.total.toFixed(2));
    if(producto.cantidad==0){
      this.productosAgregados.splice(index,1);
    }
  }

  completarCompra(){
    alert('Compra completada exitosamente');
    this.productosAgregados=[];
    this.total=0;
  }

}
