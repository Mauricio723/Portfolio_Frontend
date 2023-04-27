import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/modelos/About';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() datosPersona: any;

  about: About = {
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
    
    this.about.nombre = "Nombre sin definir";
    this.about.apellido = "Apellido sin definir";
    this.about.ocupacion = "Ocupación sin definir";
    this.about.tituloPrincipal = "Título principal sin definir";
    this.about.fechaNacimiento = "Fecha de nacimiento sin definir";
    this.about.documento = "Documento sin definir";
    this.about.email = "email sin definir";
    this.about.acercaDe = "Acerca de sin definir";
    this.about.urlFoto = "url foto sin definir";
    this.about.urlBanner = "url banner sin definir";   

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
    
    this.about.nombre = this.datosPersona.nombre;
    this.about.apellido = this.datosPersona.apellido;
    this.about.ocupacion = this.datosPersona.ocupacion;
    this.about.tituloPrincipal = this.datosPersona.tituloPrincipal;
    this.about.fechaNacimiento = this.datosPersona.fecha_nacimiento;
    this.about.documento = this.datosPersona.documento;
    this.about.email = this.datosPersona.email;
    this.about.acercaDe = this.datosPersona.acerca_de;
    this.about.urlFoto = this.datosPersona.urlFoto;
    this.about.urlBanner = this.datosPersona.urlBanner;   
    
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
      
      this.servicioAdmin.modificarPersona(this.about,
        this.idPersona,
        this.idCiudad).subscribe(() => {
          //this.myRuta.navigate(["/secciones"]);
          window.location.reload()
        } );

    }    

    if (this.crearNuevaPersona && confirm("Confirmación envío de datos nueva Persona")) {    

      this.servicioAdmin.crearPersona(this.about, this.idCiudad).subscribe(() => {
        this.myRuta.navigate(["/secciones"]);
        //window.location.reload()
      } );         
    }   
  }   
  
  eventoBtnCancelarEnvio() {
    this.mostrarFormularioDatos = false;
  }

}
