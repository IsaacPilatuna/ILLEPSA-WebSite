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

  limpiarPassword(){
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
    
    if(!this.comprobarUsuarioVacio()){
      if (!this.comprobarPassword()){
        this.limpiarPassword();
        alert('Las contraseñas no coinciden')
      }else{
        this._loginService.usuarios.push(usuario);
        this.limpiarUsuario();
        alert('Usuario registrado con éxito')
      }
    }

  }

  comprobarPassword(){

    const password = this.passwordRegistro;
    const passwordConfirm = this.passwordConfirmRegistro;

    if (password === passwordConfirm){
      return true
    }

  }

  comprobarUsuarioVacio(){
    if(this.nombreRegistro == "" || this.identificacionRegistro=="" || this.emailRegistro=="" || this.passwordRegistro=="" || this.passwordConfirmRegistro==""){
      alert("Ingrese todos los datos solicitados")
      return true;
    }

    return false;
    
  }

  iniciarSesion(){
    
    const correo = this.emailLoginInput;
    const password=this.passwordLoginInput;
    var usuarioEncontrado = false;
    var passwordCorrecto = false;
    this._loginService.usuarios.forEach(usuario => {
      if(usuario.email== correo){
        usuarioEncontrado = true;
        if(usuario.password==password){
          // send message to subscribers via observable subject
          passwordCorrecto = true;
          alert('Inicio de sesión exitoso');
          this._loginService.sendMessage(true);
          this._loginService.usuarioLogeado=usuario;
          this._router.navigateByUrl('/home');
        }
      } 
      
    });
    if(!usuarioEncontrado || !passwordCorrecto){
      alert('Credenciales Incorrectas');
    }
  }

  clearMessage(): void {
    // clear message
    this._loginService.clearMessage();
}

}
