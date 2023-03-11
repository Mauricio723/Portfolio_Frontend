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
    fecha_nacimiento: "",
    documento: "",
    email: "",
    acerca_de: "",
    urlFoto: "",
    urlBanner: ""
  };

  idPersona: number = 0;

  idCiudad: number = 1;

  listaCiudades: any;

  nuevaCiudad : any;

  laCiudadEsNueva : Boolean = false; 

  mostrarFormularioDatos: Boolean = false;

  mostrarMasDatos : Boolean = false;

  modificarDatos: Boolean = false;
  crearNuevaPersona: Boolean = false;

  tituloFormulario : String = ""; 
 
  mostrarFormularioCiudad : Boolean = false; 
  
  constructor(private servicioAdmin: AdminService, private myRuta : Router) {   

  }

  ngOnInit(): void {

    this.about.nombre = this.datosPersona.nombre;
    this.about.apellido = this.datosPersona.apellido;
    this.about.ocupacion = this.datosPersona.ocupacion;
    this.about.tituloPrincipal = this.datosPersona.tituloPrincipal;
    this.about.fecha_nacimiento = this.datosPersona.fecha_nacimiento;
    this.about.documento = this.datosPersona.documento;
    this.about.email = this.datosPersona.email;
    this.about.acerca_de = this.datosPersona.acerca_de;
    this.about.urlFoto = this.datosPersona.urlFoto;
    this.about.urlBanner = this.datosPersona.urlBanner;   

    this.idPersona = this.datosPersona.id;

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
 
  accionBotonCrearPersona() {
    this.laCiudadEsNueva = false;
    this.obtenerCiudades();
    this.crearNuevaPersona = true;
    this.modificarDatos = false;
    this.mostrarFormularioDatos = true;
    this.tituloFormulario = "Formulario para ingresar datos Nueva Persona";
  }

  accionBotonModificar(idSeleccionado: number) {
    this.laCiudadEsNueva = false;   
    this.obtenerCiudades(); 
    this.modificarDatos = true;
    this.crearNuevaPersona = false;
    this.mostrarFormularioDatos = true;   
    this.tituloFormulario = "Formulario para Modificar datos Persona";
  }

  accionBotonEliminar(idEliminar: number): void {

    if (confirm("Esta seguro de la eliminación la persona con id: " + idEliminar)) {
      this.servicioAdmin.eliminarPersona(idEliminar).subscribe(() => {
        window.location.reload();
      });
    }
  }

  accionBotonMostrarMas() {
    this.mostrarMasDatos = true;
  }
  accionBotonMostrarMenos() {
    this.mostrarMasDatos = false;
  }


  eventoBotonNuevaCiudad() {
    alert("Evento : eventoBotonNuevaCiudad");
    this.mostrarFormularioCiudad = true;
  }

  /*
  eventoBotonObtenerCiudades() {
    this.obtenerCiudades();
  }   */

  cerrarFormularioCiudad(mensaje : String) {
    this.mostrarFormularioCiudad = false;
    alert("Respuesta Ciudades: " + mensaje);
    this.obtenerCiudades();
    
    alert("nombre última ciudad: " + 
    this.listaCiudades[this.listaCiudades.length -1].nombre);

    this.laCiudadEsNueva = true;

  }
 
  /*
  procesaPropagar(mensaje : String) {
    alert("Mensaje desde Ciudades: " + mensaje);
    //console.log(mensaje);
  } */  


  //accionFormularioDatos(idPersona: number, idCiudad: number): void {

  eventoBotonEnviarDatos() {

    this.mostrarFormularioDatos = false;
   
    if (this.laCiudadEsNueva) {
      this.idCiudad = this.listaCiudades[this.listaCiudades.length - 1].id
    }

    //alert("id de la nueva ciudad: " + this.idCiudad);

  //console.log("datos formulario para enviar: " + JSON.stringify(this.about));

    if (this.modificarDatos && confirm("Está seguro de la modificación de los datos")) {

      //alert("Se están por modificar los datos de id: " + this.idPersona);
      //alert("ID de la ciudad de la persona: " + this.datosPersona.ciudad.id);
      //alert("Ciudad de la persona: " + this.datosPersona.ciudad.nombre);

      //this.about.nombre = this.nombre;
      //this.about.apellido = this.apellido;
      //this.about.ocupacion = this.ocupacion;
      //this.about.tituloPrincipal = this.tituloPrincipal;
      //this.about.fecha_nacimiento = this.fecha_nacimiento;
      //this.about.documento = this.documento;
      //this.about.email = this.email;
      //this.about.acerca_de = this.acerca_de;
      //this.about.urlFoto = this.urlFoto;
      //this.about.urlBanner = this.urlBanner;

      this.servicioAdmin.modificarPersona(this.about,
        this.idPersona,
        this.idCiudad).subscribe(() => {
          //this.myRuta.navigate(["/secciones"]);
          window.location.reload()
        } );

      /*
        console.log("Datos luego de  modificar la persona: " + 
      JSON.stringify(this.about));
      */
    }    

    if (this.crearNuevaPersona && confirm("Está seguro de la creación de la Persona")) {

      //alert("El formulario fué seleccionado para crear nueva Persona");

      this.servicioAdmin.crearPersona(this.about, this.idCiudad).subscribe(() => {
        this.myRuta.navigate(["/secciones"]);
        //window.location.reload()
      } );
         
    }
   
  }   

}
