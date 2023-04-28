import { Component, Input, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/modelos/Trabajo';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  @Input() datosMyApi: any;
  @Input() idPersona: any;

  trabajo: Trabajo = {
    nombreEmpresa: "",
    puestoLaboral: "",
    anioInicio: 0,
    anioFin: 0,
    descripcion: "",
    persona_id: 0
  };

  nombreEmpresa: String;
  puestoLaboral: String;
  anioInicio: number;
  anioFin: number;
  descripcion: String;
  
  listaCiudades: any;

  idTrabajoSeleccionado: number = 0;
  idCiudad: number = 0;

  nombreCiudad: String = "";

  laCiudadEsNueva: Boolean = false;

  mostrarFormularioCiudad: Boolean = false;

  mostrarFormularioDatos: Boolean = false;

  esFormularioEditar: Boolean = false;
  esFormularioCrear: Boolean = false;
  tituloFormulario: String = "";

  constructor(private servicioAdmin: AdminService) {

    this.nombreEmpresa = "Nombre empresa sin definir";
    this.puestoLaboral = "Puesto laboral sin definir";
    this.anioInicio = 0;
    this.anioFin = 0;
    this.descripcion = "Descripcion del trabajo sin definir";

  } 

  ngOnInit(): void {    

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

  eventoBtnNuevaCiudad() {
    this.mostrarFormularioCiudad = true;
  }

  eventoDeCiudad(respuestaCiudad: Boolean) {
    this.obtenerCiudades();
    this.laCiudadEsNueva = respuestaCiudad;
    this.mostrarFormularioCiudad = false;    
  }

  eventoBtnCrear() {

    this.laCiudadEsNueva = false;
    this.obtenerCiudades();
    this.esFormularioCrear = true;
    this.esFormularioEditar = false;

    this.tituloFormulario = "Formulario para crear nuevo trabajo";
    this.mostrarFormularioDatos = true;

  }

  eventoBtnEditar(idTrabajoEdit: number, 
                  idCiudadEdit : number,
                  trabajoEdit: Trabajo) {

    this.nombreEmpresa = trabajoEdit.nombreEmpresa;
    this.puestoLaboral = trabajoEdit.puestoLaboral;
    this.anioInicio = trabajoEdit.anioInicio;
    this.anioFin = trabajoEdit.anioFin;
    this.descripcion = trabajoEdit.descripcion;

    this.idTrabajoSeleccionado = idTrabajoEdit;

    this.idCiudad = idCiudadEdit;

    this.laCiudadEsNueva = false;
    this.obtenerCiudades();
    this.esFormularioEditar = true;
    this.esFormularioCrear = false;

    this.tituloFormulario = "Formulario para Editar Trabajo";
    this.mostrarFormularioDatos = true;

  }

  eventoBtnEliminar(idTrabajoDelete: number) {
    if (confirm("Está seguro de la eliminación del Estudio id: " + idTrabajoDelete)) {
      this.servicioAdmin.eliminarTrabajo(idTrabajoDelete).subscribe(() => {
        window.location.reload();
      });
    } else {
      alert("Se canceló la eliminación de Educacion id: " + idTrabajoDelete);
    }
  }

  eventoBtnEnviarDatos() {

    if (this.laCiudadEsNueva) {
      this.idCiudad = this.listaCiudades[this.listaCiudades.length - 1].id
    }

    if (this.idCiudad === 0) {
      alert("Debe seleccionar una ciudad !!");
    } else {

      if (this.esFormularioEditar && confirm("Está seguro del envío de los datos?")) {

        this.trabajo.nombreEmpresa = this.nombreEmpresa;
        this.trabajo.puestoLaboral = this.puestoLaboral;
        this.trabajo.anioInicio = this.anioInicio;
        this.trabajo.anioFin = this.anioFin;
        this.trabajo.descripcion = this.descripcion;
        this.trabajo.persona_id = this.idPersona;

        this.servicioAdmin.modificarTrabajo(this.idTrabajoSeleccionado,
          this.idCiudad, this.trabajo).subscribe(() => {
            window.location.reload();
          });
      }

      if (this.esFormularioCrear && confirm("Está seguro del envio de los datos?")) {

        this.trabajo.nombreEmpresa = this.nombreEmpresa;
        this.trabajo.puestoLaboral = this.puestoLaboral;
        this.trabajo.anioInicio = this.anioInicio;
        this.trabajo.anioFin = this.anioFin;
        this.trabajo.descripcion = this.descripcion;
        this.trabajo.persona_id = this.idPersona;
        
        this.servicioAdmin.crearTrabajo(this.trabajo,
          this.idCiudad).subscribe(() => {
            
            window.location.reload();
          }
          );              

      }
      this.mostrarFormularioDatos = false;
    }
  }

  eventoBtnCancelarEnvio() {
    this.mostrarFormularioDatos = false;
  } 

}
