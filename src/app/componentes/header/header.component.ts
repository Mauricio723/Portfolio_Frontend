import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  btnLoginDesactivado : Boolean = false; 
  btnCerrarDesactivado :boolean = false;

  constructor (private myRouter: Router) 
  { } 

  ngOnInit(): void {       

  } 

  loginPortfolio() {
    this.btnLoginDesactivado = true;
    this.btnCerrarDesactivado = false;
    this.myRouter.navigate(["/login"]);
  }

  nuevoUsuario() {
    this.btnLoginDesactivado = false;
    this.myRouter.navigate(["/nuevo"]);
  }

  cerrarSesion() { 
    this.btnCerrarDesactivado = true;
    this.btnLoginDesactivado = false;   
    //this.authService.cerrarSesion();

    // Borramos el contenico de currentuser
    sessionStorage.removeItem("currentUser");
    sessionStorage.setItem("mensajeSession", "Sesión Cerrada - Gracias por su visita");
    this.myRouter.navigate(["/inicio"]);
    //window.location.reload();
  }

}
