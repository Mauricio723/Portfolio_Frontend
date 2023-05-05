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
  };

  idPersona: number = 0;
  idCiudad: number = 0;
  listaCiudades: any;
  nuevaCiudad : any;

  laCiudadEsNueva : Boolean = false;
  mostrarFormularioDatos: Boolean = false;
  mostrarMasDatos : Boolean = false;
  modificarDatos: Boolean = false;
  crearNuevaPersona: Boolean = false;

  tituloFormulario : String = "";  
  mostrarFormularioCiudad : Boolean = false; 
  
  constructor (private servicioAdmin: AdminService, private myRuta : Router) {   

  }

  ngOnInit(): void {
    
    this.persona.nombre = "Nombre sin definir";
    this.persona.apellido = "Apellido sin definir";
    this.persona.ocupacion = "Ocupación sin definir";
    this.persona.tituloPrincipal = "Título principal sin definir";
    this.persona.fechaNacimiento = "Fecha de nacimiento sin definir";
    this.persona.documento = "Documento sin definir";
    this.persona.email = "email sin definir";
    this.persona.acercaDe = "Acerca de sin definir";
    this.persona.urlFoto = "url foto sin definir";
    this.persona.urlBanner = "url banner sin definir";   

    this.idPersona = this.datosPersona.id;

    this.idCiudad = this.datosPersona.ciudad.id;

  }
 
  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
  }

  obtenerCiudades() {
    this.servicioAdmin.traerCiudades().subscribe(
      datosCiudades => {
        this.listaCiudades = datosCiudades;        
      }
    );      
  }
 
  eventoBtnCrearPersona() {
    this.laCiudadEsNueva = false;
    this.obtenerCiudades();
    this.crearNuevaPersona = true;
    this.modificarDatos = false;
    this.mostrarFormularioDatos = true;
    this.tituloFormulario = "Formulario para ingresar datos Nueva Persona";
  }

  eventoBtnModificar(idSeleccionado: number) {
    
    this.persona.nombre = this.datosPersona.nombre;
    this.persona.apellido = this.datosPersona.apellido;
    this.persona.ocupacion = this.datosPersona.ocupacion;
    this.persona.tituloPrincipal = this.datosPersona.tituloPrincipal;
    this.persona.fechaNacimiento = this.datosPersona.fechaNacimiento;
    this.persona.documento = this.datosPersona.documento;
    this.persona.email = this.datosPersona.email;
    this.persona.acercaDe = this.datosPersona.acercaDe;
    this.persona.urlFoto = this.datosPersona.urlFoto;
    this.persona.urlBanner = this.datosPersona.urlBanner;   
    
    this.laCiudadEsNueva = false;   
    this.obtenerCiudades(); 
    this.modificarDatos = true;
    this.crearNuevaPersona = false;
    this.mostrarFormularioDatos = true;   
    this.tituloFormulario = "Formulario para Modificar datos Persona";
  }

  eventoBtnEliminar(idEliminar: number): void {

    if (confirm("Esta seguro de la eliminación la persona con id: " + idEliminar)) {
      this.servicioAdmin.eliminarPersona(idEliminar).subscribe(() => {
        window.location.reload();
      });
    }
  }

  eventoBtnMostrarMas() {
    this.mostrarMasDatos = true;
  }
  eventoBtnMostrarMenos() {
    this.mostrarMasDatos = false;
  }

  eventoBotonNuevaCiudad() {    
    this.mostrarFormularioCiudad = true;
  }

  eventoDeCiudad(respuestaCiudad : Boolean) {      
    this.obtenerCiudades();
    this.mostrarFormularioCiudad = false;    
    this.laCiudadEsNueva = respuestaCiudad;
  }
 
  eventoBtnEnviarDatos() {

    this.mostrarFormularioDatos = false;
   
    if (this.laCiudadEsNueva) {
      this.idCiudad = this.listaCiudades[this.listaCiudades.length - 1].id
    }

    if (this.modificarDatos && confirm("Está seguro de la modificación de los datos")) {
      
      this.servicioAdmin.modificarPersona(this.persona,
        this.idPersona,
        this.idCiudad).subscribe(() => {
          //this.myRuta.navigate(["/secciones"]);
          window.location.reload()
        } );

    }    

    if (this.crearNuevaPersona && confirm("Confirmación envío de datos nueva Persona")) {    

      this.servicioAdmin.crearPersona(this.persona, this.idCiudad).subscribe(() => {
        this.myRuta.navigate(["/secciones"]);
        //window.location.reload()
      } );         
    }   
  }   
  
  eventoBtnCancelarEnvio() {
    this.mostrarFormularioDatos = false;
  }

}
