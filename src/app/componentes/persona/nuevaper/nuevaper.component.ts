import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-nuevaper',
  templateUrl: './nuevaper.component.html',
  styleUrls: ['./nuevaper.component.css']
})
export class NuevaperComponent implements OnInit {

  personaNueva: Persona = {
    nombre: "",
    apellido: "",
    ocupacion: "",
    tituloPrincipal: "",
    fechaNacimiento: "",
    documento: "",
    email: "",
    acercaDe: "",
    urlFoto: "",
    urlBanner: ""
  };

  idCiudad: number = 0;

  listaCiudades: any;

  mostrarFormularioCiudad: Boolean = false;
  laCiudadEsNueva: Boolean = false;

  constructor(private servicioAdmin: AdminService,  private myRuta : Router) {

    this.personaNueva.nombre = "Nombre sin definir";
    this.personaNueva.apellido = "Apellido sin definir";
    this.personaNueva.ocupacion = "Ocupación sin definir";
    this.personaNueva.tituloPrincipal = "Título si definir";
    this.personaNueva.fechaNacimiento = "00 de Mes de 0000";
    this.personaNueva.documento = "0000000";
    this.personaNueva.email = "email sin definir";
    this.personaNueva.acercaDe = "Texto acerca de sin definir";
    this.personaNueva.urlFoto = " URL foto sin definir";
    this.personaNueva.urlBanner = "URL banner sin definir";

    this.obtenerCiudades();
  }

  ngOnInit(): void {
  }

  obtenerCiudades() {
    this.servicioAdmin.traerCiudades().subscribe(datosCiudad => {
      this.listaCiudades = datosCiudad;
    });
  }

  eventoBtnNuevaCiudad() {
    this.mostrarFormularioCiudad = true;
  }
  
  eventoDeCiudad(respuestaCiudad: Boolean) {
    this.obtenerCiudades();
    this.mostrarFormularioCiudad = false;
    this.laCiudadEsNueva = respuestaCiudad;
  }

  eventoBtnEnviarDatos() {

    if (this.laCiudadEsNueva) {
      this.idCiudad = this.listaCiudades[this.listaCiudades.length - 1].id
    }

    if (confirm("Confirmación envío de datos nueva Persona")) {    

      this.servicioAdmin.crearPersona(this.personaNueva, this.idCiudad).subscribe(() => {
        this.myRuta.navigate(["/secciones"]);
        //window.location.reload()
      } );         
    }   else {
      alert("El envío de datos para Nueva Persona fué cancelado");
      this.myRuta.navigate(["/secciones"]);
    }

  }

}
