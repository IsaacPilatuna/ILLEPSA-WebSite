import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../servicios/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogin=false;
  constructor(private _loginService:LoginServiceService) { 
    this.userLogin=_loginService.loginUsuario;
  }

  ngOnInit() {
  }
  iniciarSesion(){
    this.userLogin=true;
  }

  cerrarSesion(){
    this.userLogin=false;
  }
}
