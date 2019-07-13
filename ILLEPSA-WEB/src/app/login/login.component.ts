import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../servicios/login-service.service';
import { Router, ActivatedRoute, ParamMap, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios=[];
  nombreRegistro:string='';
  identificacionRegistro:string='';
  emailRegistro:string='';
  passwordRegistro:string='';
  passwordConfirmRegistro:string='';

  emailLoginInput:string='';
  passwordLoginInput:string='';

  constructor(private _loginService:LoginServiceService, private _router:Router) { }

  ngOnInit() {
  }

  limpiarUsuario(){
    this.nombreRegistro='';
    this.identificacionRegistro='';
    this.emailRegistro='';
    this.passwordRegistro='';
    this.passwordConfirmRegistro='';
  }
  registrarUsuario(){
    const usuario = {
      nombreCompleto:this.nombreRegistro,
      identificacion:this.identificacionRegistro,
      email:this.emailRegistro,
      password:this.passwordRegistro
    };
    this.usuarios.push(usuario);
    console.log(this.usuarios);
    this.limpiarUsuario();
    alert('Usuario registrado con éxito')
  }

  iniciarSesion(){
    
    const correo = this.emailLoginInput;
    const password=this.passwordLoginInput;
    const loginService=this._loginService;
    const router=this._router;
    this.usuarios.forEach(function (usuario) {
      if(usuario.email== correo && usuario.password==password){
        loginService.loginUsuario=true;
        router.navigateByUrl('/#');
        
      }
    });
  }

}
