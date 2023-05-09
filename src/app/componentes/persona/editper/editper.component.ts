import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-editper',
  templateUrl: './editper.component.html',
  styleUrls: ['./editper.component.css']
})
export class EditperComponent implements OnInit {

  personaEdit : Persona = {
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
  
  //datoDePersona01 : any;

  idPersonaEdit : any;

  idCiudadPersonaEdit : number = 0;

  personaActual : any;

  //datoDePersona02 : any;

  listaCiudades : any;

  cambiarCiudad : Boolean = false;
  mostrarFormularioCiudad : Boolean = false;
  laCiudadEsNueva : Boolean = false;

  
  constructor(private routeActivated : ActivatedRoute, 
    private servicioAdmin : AdminService) { }

  ngOnInit(): void {

    this.idPersonaEdit = this.routeActivated.snapshot.params["id"];

    this.servicioAdmin.traerPersona(this.idPersonaEdit).subscribe(
      datosPersona => {
        this.personaActual = datosPersona;
        this.asignarDatosPersona();
    });   

  }

  obtenerCiudades() {
    this.servicioAdmin.traerCiudades().subscribe(datosCiudad => {
      this.listaCiudades = datosCiudad;
    });
  }

  asignarDatosPersona() {

    this.personaEdit.nombre = this.personaActual.nombre;
    this.personaEdit.apellido = this.personaActual.apellido;
    this.personaEdit.ocupacion = this.personaActual.ocupacion;
    this.personaEdit.tituloPrincipal = this.personaActual.tituloPrincipal;
    this.personaEdit.fechaNacimiento = this.personaActual.fechaNacimiento;
    this.personaEdit.documento = this.personaActual.documento;
    this.personaEdit.email = this.personaActual.email;
    this.personaEdit.acercaDe = this.personaActual.acercaDe;
    this.personaEdit.urlFoto = this.personaActual.urlFoto;
    this.personaEdit.urlBanner = this.personaActual.urlBanner;
    
    this.idCiudadPersonaEdit = this.personaActual.ciudad.id;

  }

  eventoBtnCambiarCiudad() {
    alert("dentro del método eventoBtnCambiarCiudad");
    
    this.obtenerCiudades();
    this.cambiarCiudad = true;
  }

  eventoDeCiudad(respuestaCiudad : Boolean) {      
    this.obtenerCiudades();
    this.mostrarFormularioCiudad = false;    
    this.laCiudadEsNueva = respuestaCiudad;
  }

  eventoBotonNuevaCiudad() {    
    this.mostrarFormularioCiudad = true;
  } 

  eventoBtnEnviarDatos() {

    console.log("Datos Persona par enviar: " + JSON.stringify(this.personaEdit));

    console.log("id Ciudad seleccionada: " + this.idCiudadPersonaEdit);

  }


}
