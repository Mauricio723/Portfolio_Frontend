
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciopf',
  templateUrl: './iniciopf.component.html',
  styleUrls: ['./iniciopf.component.css']
})
export class IniciopfComponent implements OnInit {

  tituloInicio: any;
   
  constructor(private servicioAutenticacion : AutenticacionService, private myRouter : Router) {
   
  }

  ngOnInit(): void {
    
    if (sessionStorage.getItem("mensajeSession")) {

      this.tituloInicio = sessionStorage.getItem("mensajeSession");

    } else {
      this.tituloInicio = "Inicio Portfolio";
    } 
   
  }

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
