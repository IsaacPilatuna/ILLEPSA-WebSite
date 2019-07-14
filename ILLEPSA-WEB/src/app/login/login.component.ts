import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../servicios/login-service.service';
import { Router, ActivatedRoute, ParamMap, UrlHandlingStrategy } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      password:this.passwordRegistro,
      empresa:'',
      ruc:'',
      telefono:'',
      datosEnvio:{
        provincia:'',
        ciudad:'',
        direccion:''
      }
    };
    this._loginService.usuarios.push(usuario);
    this.limpiarUsuario();
    alert('Usuario registrado con éxito')
  }

  iniciarSesion(){
    
    const correo = this.emailLoginInput;
    const password=this.passwordLoginInput;
    this._loginService.usuarios.forEach(usuario => {
      if(usuario.email== correo && usuario.password==password){
        // send message to subscribers via observable subject
        alert('Inicio de sesión exitoso');
        this._loginService.sendMessage(true);
        this._loginService.usuarioLogeado=usuario;
        this._router.navigateByUrl('/home');
        
      }
      
    });
  }

  clearMessage(): void {
    // clear message
    this._loginService.clearMessage();
}

}
