import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../servicios/login-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogin: boolean=false;
  subscription: Subscription;

  constructor(private loginService: LoginServiceService) {
    // subscribe to home component userLogins
    this.subscription = this.loginService.getMessage().subscribe(userLogin => { this.userLogin = userLogin; });
}

  ngOnInit() {

  }

  ngOnDestroy(){
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  iniciarSesion(){
    this.userLogin=true;
  }

  cerrarSesion(){
    this.userLogin=false;
  }
}
