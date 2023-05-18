import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
   
  rutaActual : String = "";

  constructor (private myRouter: Router) 
  {      } 

  ngOnInit(): void {     

    this.rutaActual = window.location.pathname;

  } 
 
  clkEnlaceInicio() {
    this.rutaActual = "/inicio";     
  }

  clkEnlaceNuevo() {
    this.rutaActual = "/nuevo";   
  }

  clkEnlaceLogin() {
    this.rutaActual = "/login"; 
  }
  clkEnlaceCerrar() {
    this.rutaActual = "/inicio"
    sessionStorage.removeItem("currentUser");
    sessionStorage.setItem("mensajeSession", "Sesión Cerrada - Gracias por su visita");
  }
 
}
