import { Component, Input, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/modelos/Trabajo';
import { AdminService } from 'src/app/servicios/admin.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  datosJsonTrabajos: any;

  @Input() datosMyApi: any;

  trabajo: Trabajo = {
    nombreEmpresa: "",
    puestoLaboral: "",
    anioInicio: 0,
    anioFin: 0,
    descripcion: ""
  };

  nombreEmpresa: String;
  puestoLaboral: String;
  anioInicio: number;
  anioFin: number;
  descripcion: String;


  idPersona: number = 0;

  listaCiudades: any;

  idTrabajoSeleccionado: number = 0;
  idCiudad: number = 0;
 
  nombreCiudad : String = "";
  
  mostrarBotones: Boolean = false;

  mostrarFormularioDatos: Boolean = false;

  esFormularioEditar: Boolean = false;
  esFormularioCrear: Boolean = false;


  constructor(private servicioAdmin: AdminService) {

    this.nombreEmpresa = "Nombre empresa sin definir";
    this.puestoLaboral = "Puesto laboral sin definir";
    this.anioInicio = 0;
    this.anioFin = 0;
    this.descripcion = "Descripcion del trabajo sin definir";

  }

  //  private servicioPortfolio: PortfolioService

  ngOnInit(): void {
   
     this.servicioAdmin.traerCiudades().subscribe(
      datosCiudades => {
        this.listaCiudades = datosCiudades;        
      }
    );      
 
    /*
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosTrabajo => {
        this.datosJsonTrabajos= datosTrabajo;
      }
    );   */

  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
  }

 
 accionBotonEditar(idParaEditar : number, 
                  trabajoParaEditar : Trabajo, 
                  ciudadSeleccionada : String) {
   
    this.nombreCiudad = ciudadSeleccionada;

    this.idTrabajoSeleccionado = idParaEditar;

    this.nombreEmpresa = trabajoParaEditar.nombreEmpresa;
    this.puestoLaboral = trabajoParaEditar.puestoLaboral;
    this.anioInicio = trabajoParaEditar.anioInicio;
    this.anioFin = trabajoParaEditar.anioFin;
    this.descripcion = trabajoParaEditar.descripcion;
    
    //this.idEducacionSeleccionado = idParaEditar;
    this.esFormularioEditar = true;
    this.esFormularioCrear = false;
    this.mostrarFormularioDatos = true;

  }

  accionBotonEliminar(idParaEliminar : number) {
    //alert("Se presionó el boton Eliminar para el  id: " + idParaEliminar);
    if (confirm("Está seguro de la eliminación del Trabajo id: " + idParaEliminar)) {
      this.servicioAdmin.eliminarTrabajo(idParaEliminar).subscribe(() => {
        window.location.reload();
      });

    } else {
      alert("Se canceló la eliminación del Trabajo id: " + idParaEliminar);
    }
  }

   accionBotonCrearNuevo() {   
    this.esFormularioCrear = true;
    this.esFormularioEditar = false;
    this.mostrarFormularioDatos = true;   
  }

  accionFormularioDatos () {
    
    if (this.esFormularioEditar && confirm("Está seguro del envío de los datos?")) {
      
      this.trabajo.nombreEmpresa = this.nombreEmpresa;
      this.trabajo.puestoLaboral = this.puestoLaboral;
      this.trabajo.anioInicio = this.anioInicio;
      this.trabajo.anioFin = this.anioFin;
      this.trabajo.descripcion = this.descripcion;
     
      this.servicioAdmin.modificarTrabajo(this.idTrabajoSeleccionado,
                                 this.idCiudad, 
                                 this.trabajo).subscribe(() => {
        window.location.reload();
      });      
    }

    if (this.esFormularioCrear && confirm("Está seguro del envio de los datos?")) {

      this.idPersona = this.datosMyApi.id;
      
      this.trabajo.nombreEmpresa = this.nombreEmpresa;
      this.trabajo.puestoLaboral = this.puestoLaboral;
      this.trabajo.anioInicio = this.anioInicio;
      this.trabajo.anioFin = this.anioFin;
      this.trabajo.descripcion = this.descripcion;      

      this.servicioAdmin.crearTrabajo(this.trabajo, 
        this.idPersona, this.idCiudad).subscribe(() => {
          window.location.reload();
        }      
      );

    }

    this.mostrarFormularioDatos = false;

  } 
 

}
