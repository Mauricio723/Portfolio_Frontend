import { Component, Input, OnInit } from '@angular/core';
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

  nombre: String = "";
  apellido: String = "";
  ocupacion: String = "";
  tituloPrincipal: String = "";
  fecha_nacimiento: String = "";
  documento: String = "";
  email: String = "";
  acerca_de: String = "";
  urlFoto: String = "";
  urlBanner: String = "";

  ciudad_id : number = 1;

  // variables booleanas para mostrar formularios y botones
  mostrarBotones: Boolean = true;

  mostrarFormularioDatos: Boolean = false;

  modificarDatos: Boolean = false;
  crearNuevaPersona: Boolean = false;

  //mostrarInputEdit: Boolean = false;
 

  //idParaModificar: number = 0;   

  constructor(private servicioAdmin: AdminService) {   

  }

  ngOnInit(): void {

    this.nombre = this.datosPersona.nombre;
    this.apellido = this.datosPersona.apellido;
    this.ocupacion = this.datosPersona.ocupacion;
    this.tituloPrincipal = this.datosPersona.tituloPrincipal;
    this.fecha_nacimiento = this.datosPersona.fecha_nacimiento;
    this.documento = this.datosPersona.documento;
    this.email = this.datosPersona.email;
    this.acerca_de = this.datosPersona.acerca_de;
    this.urlFoto = this.datosPersona.urlFoto;
    this.urlBanner = this.datosPersona.urlBanner;   
    
  }
 
  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
  }

  accionBotonCrearPersona() {
    this.crearNuevaPersona = true;
    this.modificarDatos = false;
    this.mostrarFormularioDatos = true;
  }

  accionBotonModificar(idSeleccionado: number) {    
    this.modificarDatos = true;
    this.crearNuevaPersona = false;
    this.mostrarFormularioDatos = true;   
  }

  accionBotonEliminar(idEliminar: number): void {

    if (confirm("Esta seguro de la eliminación la persona con id: " + idEliminar)) {
      this.servicioAdmin.eliminarPersona(idEliminar).subscribe(() => {
        window.location.reload();
      });
    }
  }

  accionFormularioDatos(idPersona: number, idCiudad: number): void {

    if (this.modificarDatos && confirm("Está seguro de la modificación de los datos")) {

      alert("Se están por modificar los datos de id: " + idPersona);

      console.log("ID de la ciudad de la persona: " + this.datosPersona.ciudad.id);
      console.log("Ciudad de la persona: " + this.datosPersona.ciudad.nombre);

      this.about.nombre = this.nombre;
      this.about.apellido = this.apellido;
      this.about.ocupacion = this.ocupacion;
      this.about.tituloPrincipal = this.tituloPrincipal;
      this.about.fecha_nacimiento = this.fecha_nacimiento;
      this.about.documento = this.documento;
      this.about.email = this.email;
      this.about.acerca_de = this.acerca_de;
      this.about.urlFoto = this.urlFoto;
      this.about.urlBanner = this.urlBanner;

      this.servicioAdmin.modificarPersona(this.about,
        idPersona,
        idCiudad).subscribe(() => {
          window.location.reload()
        } );

      console.log("Datos luego de  modificar la persona: " + JSON.stringify(this.about));

    }    

    if (this.crearNuevaPersona && confirm("Está seguro de la creación de la Persona")) {

      alert("El formulario fué seleccionado para crear nueva Persona");

      this.servicioAdmin.crearPersona(this.about, this.ciudad_id).subscribe(() => {
        window.location.reload()
      } );
         
    }

    this.mostrarFormularioDatos = false;
  }   

}
