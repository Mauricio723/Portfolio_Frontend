import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() datosPersona: any;

  /*
  persona: Persona = {
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
  };     */

  idPersona: number = 0;
  //idCiudad: number = 0;
  //listaCiudades: any;
  //nuevaCiudad : any;

  //laCiudadEsNueva : Boolean = false;
  //mostrarFormularioDatos: Boolean = false;

  mostrarDatos01 : Boolean = false;

  mostrarMasDatos : Boolean = false;
  modificarDatos: Boolean = false;
  crearNuevaPersona: Boolean = false;

  //tituloFormulario : String = "";  
  //mostrarFormularioCiudad : Boolean = false; 

  textoTooltip01 : String = "";
  
  constructor (private servicioAdmin: AdminService, private myRuta : Router) {   

    this.textoTooltip01 = "presionar para mostrar datos personales";

  }

  ngOnInit(): void {  
    
    this.idPersona = this.datosPersona.id;   

  }
 
  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
  }
 
  eventoBtnCrearPersona() {
    //this.laCiudadEsNueva = false;
    //this.obtenerCiudades();
    //this.crearNuevaPersona = true;
    //this.modificarDatos = false;
    //this.mostrarFormularioDatos = true;
    //this.tituloFormulario = "Formulario para ingresar datos Nueva Persona";
  }

  eventoBtnModificar(idSeleccionado: number) {   
    
    this.modificarDatos = true;
    this.crearNuevaPersona = false;
    
  }

  eventoBtnEliminar(idEliminar: number): void {

    if (confirm("Esta seguro de la eliminación la persona con id: " + idEliminar)) {
      this.servicioAdmin.eliminarPersona(idEliminar).subscribe(() => {
        window.location.reload();
      });
    }
  }
 
  clkBtnMostrarDatos01() {
    if (this.mostrarDatos01) {
      this.mostrarDatos01 = false;
      this.textoTooltip01 = "Presionar para mostrar datos personales";
    } else {
      this.mostrarDatos01 = true;
      this.textoTooltip01 = "Presionar para ocultar datos personales";
    }
  }

  eventoBtnMostrarMas() {
    this.mostrarMasDatos = true;
  }
  eventoBtnMostrarMenos() {
    this.mostrarMasDatos = false;
  }

  eventoBotonNuevaCiudad() {    
    //this.mostrarFormularioCiudad = true;
  }
 
  eventoBtnEnviarDatos() {

    //this.mostrarFormularioDatos = false;   

  }   
  
  eventoBtnCancelarEnvio() {
    //this.mostrarFormularioDatos = false;
  } 
  
}
