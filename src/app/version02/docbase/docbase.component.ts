import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-docbase',
  templateUrl: './docbase.component.html',
  styleUrls: ['./docbase.component.css']
})
export class DocbaseComponent implements OnInit {

  rutaNavegadorActual : string;
  sessionIniciadaOk : boolean;

  // variables footer   
   
  mostrarDerechosAutor : Boolean = false;
  mostrarAbout : Boolean = false;

  constructor(private myRouter : Router, 
    private servicioAutenticacion : AutenticacionService) {

    this.rutaNavegadorActual = "";
    this.sessionIniciadaOk = false;

   }

  ngOnInit(): void {

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
          //console.log("Ruta Actual : " + this.rutaNavegadorActual);
        }
      }
    );     
  }

  cerrarSession() {
    
    sessionStorage.removeItem("currentUser");

    /*
    sessionStorage.setItem("mensajeSession", 
    "Sesión Cerrada - Gracias por su visita");
    */

    if (this.rutaNavegadorActual != "/home") {
      this.myRouter.navigate(["/home"]);
    }

    //window.location.reload();
  }

  // Sección footer 
  
  eventoBtnDerechos() {
    if(this.mostrarDerechosAutor) {
      this.mostrarDerechosAutor= false;
    } else {
      this.mostrarDerechosAutor= true;
      //this.mostrarAbout = false;
    }
  }
  eventoBtnAbout() {
    if(this.mostrarAbout) {
      this.mostrarAbout = false;
    } else {
      this.mostrarAbout = true;
      //this.mostrarDerechosAutor = false;
    }
  }  

  // esta función es para probar; viene desde el incio anterior.
  
  btnMostrarSeccionUser() {

    let currentUser = this.servicioAutenticacion.UsuarioAutenticado;

    if (currentUser && currentUser.token) {
      // si la sesión está inicada redirigo a seccionUser por el router
      this.myRouter.navigate(["/seccionuser"]);      
    } else {
      // si la sesión no está iniciada, redirigo a formulario de login
      this.myRouter.navigate(["/login"]);
    }
    
  }

}
