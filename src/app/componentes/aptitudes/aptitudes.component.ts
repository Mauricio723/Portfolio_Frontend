import { Component, Input, OnInit } from '@angular/core';
import { Aptitud } from 'src/app/modelos/Aptitud';
import { AdminService } from 'src/app/servicios/admin.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  datosJsonAptitudes: any;

  @Input() datosMyApi : any;
  

  aptitud : Aptitud = {
    nombre : "",
    descripcion : ""
  };

  nombreAptitud : String = "";
  descripcionAptitud : String = "";


  idPersona : number = 0;

  idAptitudSeleccionada : number = 0;

  mostrarFormularioDatos : Boolean = false;

  formularioParaCrear : Boolean = false;
  formularioParaEditar : Boolean = false;

  /* 
  idProyecto: number = 0; 

  // variables booleanas para mostrar formularios y botones
  mostrarBotones: Boolean = true;
  mostrarFormularioEdicion: Boolean = false;
  mostrarFormularioAgregar: Boolean = false;

  idParaModificar: number = 0;

  operacionCancelada: Boolean = false;

  idPersona: number = 0;

  datoPrueba: any;
  */

  constructor(private servicioAdmin : AdminService) { }

  // Inyección servicio constructor: 
  // private servicioPortfolio: PortfolioService
  
  ngOnInit(): void {

    this.nombreAptitud = "Nombre aptitud sin definir";
    this.descripcionAptitud = "Descripción aptitud sin definir";

    this.idPersona = this.datosMyApi.id;

    /*
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosAptitudes => {
        this.datosJsonAptitudes= datosAptitudes;
      }
    );  */
  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
  }


  accionBotonEditar(idAptitudModificar : number, aptitudEdit : any) {

    this.mostrarFormularioDatos = true;
    this.formularioParaEditar = true;
    this.formularioParaCrear = false;

    this.idAptitudSeleccionada = idAptitudModificar;

    this.nombreAptitud = aptitudEdit.nombre;
    this.descripcionAptitud = aptitudEdit.descripcion;

  }

  accionBotonEliminar(idAptitudEliminar : number) {

    if (confirm("Está seguro de eliminar aptitud con id: " + idAptitudEliminar)) {
 
      this.servicioAdmin.eliminarAptitud(idAptitudEliminar).subscribe(() => {      
        window.location.reload();
    });

    } else {
      alert("La operación de eliminar aptitud fué cancelada");
    }  

  }

  accionBotonCrearAptitud() {

    this.mostrarFormularioDatos = true;
    this.formularioParaCrear = true;
    this.formularioParaEditar = false;

    console.log("id de la persona: " + this.idPersona);

  }

  accionFormularioDatos() {

    if (this.formularioParaCrear && confirm("Está seguro de crear aptitud ?")) {

      this.aptitud.nombre = this.nombreAptitud;
      this.aptitud.descripcion = this.descripcionAptitud;

      this.servicioAdmin.crearAptitud(this.idPersona, 
                                         this.aptitud).subscribe(() => {
        window.location.reload();
      });

    } 

    if (this.formularioParaEditar && confirm("Está seguro de modificar aptitud ?")) {

      this.aptitud.nombre = this.nombreAptitud;
      this.aptitud.descripcion = this.descripcionAptitud;

      this.servicioAdmin.modificarAtitud(this.idAptitudSeleccionada, 
                                         this.aptitud).subscribe(() => {
        window.location.reload();
      });

    } 

    this.mostrarFormularioDatos = false;
  }

  /*
  constructor(private servicioAdministrador: AdminService,
    private router: Router) {

    //this.tipoUsuario = this.servicioAdministrador.obtenerTipoUsuario();
  }


  accionBotonEditar(idSeleccionado: number) {
    //console.log("Se presionó el botón Editar");
    this.mostrarFormularioEdicion = true;
    this.idParaModificar = idSeleccionado;
    this.mostrarBotones = false;
  }

  accionBotonEliminar(idEliminar: number) : void {
    console.log("Está a punto de eliminar un proyecto");
   //alert("Esta seguro de la eliminación del proyecto con id: " + idEliminar);

    if (confirm("Esta seguro de la eliminación del proyecto con id: " + idEliminar)) {
      this.servicioAdministrador.eliminarProyecto(idEliminar).subscribe(() => {
        window.location.reload();
      } );
    }


   
    }

    accionBotonCrearNuevo() {
      this.mostrarFormularioAgregar = true;
    }
  
    cancelarOperacion() {
      this.operacionCancelada = true;
      alert("La operacion fué cancelada");
    }
  
    onModificarProyecto(idProyectoEdit: number) : void {
  
      if (confirm("Está seguro de modificar el proyecto con id: " + idProyectoEdit)) {
  
        //this.proyecto.id = idProyectoEdit;
        this.proyecto.nombre = this.nombre;
        this.proyecto.descripcion = this.descripcion;
  
        this.servicioAdministrador.modificarProyecto(
          idProyectoEdit, this.proyecto).subscribe(() => {
            window.location.reload();
          });
  
      } else {
        alert("La operación de edición fué cancelada");
      }
  
      //console.log("Datos para enviar del Proyecto: " + JSON.stringify(this.proyecto));
  
      this.mostrarBotones = true;
      this.mostrarFormularioEdicion = false;
      this.idParaModificar = 0;
    }
  
    
    onNuevoProyecto(): void {    
  
      if (confirm("Está seguro de la creacion de un nuevo proyecto?")) {
  
        this.proyecto.nombre = this.nombre;
        this.proyecto.descripcion = this.descripcion;
  
        this.idPersona = this.datosProyectos.id;
  
        console.log("El id de la persona para modificar el proyecto es: "
          + this.idPersona);
        console.log("Datos para enviar en nuevo proyecto:"
          + JSON.stringify(this.proyecto));
  
        this.servicioAdministrador.crearNuevoProyecto(this.idPersona,
          this.proyecto).subscribe(() => {
            window.location.reload();
          });
  
      } else {
        console.log("la operación de creación del proyecto fué cancelada");
        alert("La operación de crear un nuevo proyecto fué cancelada");
        this.operacionCancelada = false;
      }
  
      this.mostrarFormularioAgregar = false;
    }
  
  */
}
