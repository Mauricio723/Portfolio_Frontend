import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //datosApi_01 : any;

  constructor(private authService : AutenticacionService, 
              private router: Router) 
  { } 

  ngOnInit(): void {   
    /*
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosHeader => {       
        this.datosApi_01= datosHeader;
      }
    );   */   

  } 

  loginPortfolio() {
    this.router.navigate(["/login"]);
  }

  nuevoUsuario() {
    this.router.navigate(["/nuevo"]);
  }

  cerrarSesion() {
    console.log("Dentro del método cerrarSesion");
    this.authService.cerrarSesion();
    this.router.navigate(["/login"]);
    //window.location.reload();
  }

}
