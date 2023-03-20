import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  btnLoginDesactivado : Boolean = false; 
  btnCerrarDesactivado :boolean = false;

  constructor(private authService : AutenticacionService, 
              private router: Router) 
  { } 

  ngOnInit(): void {       

  } 

  loginPortfolio() {
    this.btnLoginDesactivado = true;
    this.btnCerrarDesactivado = false;
    this.router.navigate(["/login"]);
  }

  nuevoUsuario() {
    this.btnLoginDesactivado = false;
    this.router.navigate(["/nuevo"]);
  }

  cerrarSesion() { 
    this.btnCerrarDesactivado = true;
    this.btnLoginDesactivado = false;   
    this.authService.cerrarSesion();
    this.router.navigate(["/login"]);
    //window.location.reload();
  }

}
