import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  constructor(private _loginService:LoginServiceService) { }
  usuario:any;
  modoEdicion=true;
  ngOnInit() {
    this.usuario=this._loginService.usuarioLogeado;
  }

  editarDatos(){
    this.modoEdicion=false;
  }

  guardarDatos(){
    var index = this._loginService.usuarios.findIndex(user => user.correo == this.usuario.correo);
    this.modoEdicion=true;
    this._loginService.usuarioLogeado[index]=this.usuario;
    alert('Datos guardados exitosamente');

  }

}
