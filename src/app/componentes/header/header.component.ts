import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
   
  //rutaActual : String = "";

  rutaNavegadorActual : string;
  sessionIniciadaOk : boolean;

  constructor (private myRouter: Router, private servicioAutenticacion : AutenticacionService) {      

    this.rutaNavegadorActual = "";
    this.sessionIniciadaOk = false;

  } 

  ngOnInit(): void {     

    //this.rutaActual = window.location.pathname;

    this.obtenerRutaNavegador();

    this.comprobarSessionIniciada();

  } 
 
  comprobarSessionIniciada() {

    let currentUser = this.servicioAutenticacion.UsuarioAutenticado;

     if (currentUser && currentUser.token && sessionStorage.getItem("currentUser") != null) {
      this.sessionIniciadaOk = true;          
    } else {
      this.sessionIniciadaOk = false;           
    }
  }
  
  obtenerRutaNavegador() { 
    this.myRouter.events.subscribe((myEvento : Event) => {
        if (myEvento instanceof NavigationEnd) {
          this.rutaNavegadorActual = myEvento.url;          

          this.comprobarSessionIniciada();        

        }
      }
    );     
  }

  cerrarSession() {
    
    sessionStorage.removeItem("currentUser");

    sessionStorage.setItem("mensajeSession", "Sesión Cerrada - Gracias por su visita");

    if (this.rutaNavegadorActual != "/inicio") {
      this.myRouter.navigate(["/inicio"]);
    }

    //window.location.reload();
  }
  
}
