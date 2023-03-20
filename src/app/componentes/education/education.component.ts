import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/Educacion';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() datosMyApi: any;

  educacion: Educacion = {
    nombreInstitucion: "",
    estudioCursado: "",
    anioInicio: 0,
    anioFin: 0,
    descripcionCurso: "",
    seTerminoCurso: 0
  };

  nombreInstitucion: String;
  estudioCursado: String;
  anioInicio: number;
  anioFin: number;
  descripcionCurso: String;
  seTerminoCurso: number;

  mostrarFormularioDatos: Boolean = false;
  esFormularioEditar: Boolean = false;
  esFormularioCrear: Boolean = false;
  tituloFormulario: String = "";
  mostrarFormularioCiudad: Boolean = false;
  laCiudadEsNueva: Boolean = false;
  idPersona: number = 0;
  listaCiudades: any;
  idEducacionSeleccionado: number = 0;

  idCiudad: number = 0; 

  constructor(private servicioAdmin: AdminService) {

    this.nombreInstitucion = "Nombre Institución sin definir";
    this.estudioCursado = "Estudio cursado sin definir";
    this.anioInicio = 0;
    this.anioFin = 0;
    this.descripcionCurso = "Descripción del curso sin definir";
    this.seTerminoCurso = 0;

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

    this.tituloFormulario = "Formulario para crear nueva Educación";
    this.mostrarFormularioDatos = true;

  }

  eventoBtnEditar(idEducacionEdit: number, 
                  idCiudadEdit: number, 
                  educacionEdit: Educacion) {

    this.nombreInstitucion = educacionEdit.nombreInstitucion;
    this.estudioCursado = educacionEdit.estudioCursado;
    this.anioInicio = educacionEdit.anioInicio;
    this.anioFin = educacionEdit.anioFin;
    this.descripcionCurso = educacionEdit.descripcionCurso;
    this.seTerminoCurso = educacionEdit.seTerminoCurso;

    this.idEducacionSeleccionado = idEducacionEdit;

    this.idCiudad = idCiudadEdit;

    this.laCiudadEsNueva = false;
    this.obtenerCiudades();
    this.esFormularioEditar = true;
    this.esFormularioCrear = false;

    this.tituloFormulario = "Formulario para Editar Educación";
    this.mostrarFormularioDatos = true;
    
  }

  eventoBtnEliminar(idEducacionDelete: number) {

    if (confirm("Confirmación para eliminar Estudio id: " + idEducacionDelete)) {
      this.servicioAdmin.eliminarEducacion(idEducacionDelete).subscribe(() => {
        window.location.reload();
      });
    } else {
      alert("Se canceló la eliminación de Educacion id: " + idEducacionDelete);
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

        this.educacion.nombreInstitucion = this.nombreInstitucion;
        this.educacion.estudioCursado = this.estudioCursado;
        this.educacion.anioInicio = this.anioInicio;
        this.educacion.anioFin = this.anioFin;
        this.educacion.descripcionCurso = this.descripcionCurso;
        this.educacion.seTerminoCurso = this.seTerminoCurso;

        this.servicioAdmin.modificarEducacion(this.idEducacionSeleccionado,
          this.idCiudad,
          this.educacion).subscribe(() => {
            window.location.reload();
          });
      }

      if (this.esFormularioCrear && confirm("Está seguro del envio de los datos?")) {

        this.idPersona = this.datosMyApi.id;

        this.educacion.nombreInstitucion = this.nombreInstitucion;
        this.educacion.estudioCursado = this.estudioCursado;
        this.educacion.anioInicio = this.anioInicio;
        this.educacion.anioFin = this.anioFin;
        this.educacion.descripcionCurso = this.descripcionCurso;
        this.educacion.seTerminoCurso = this.seTerminoCurso;

        this.servicioAdmin.crearEducacion(this.educacion,
          this.idPersona, this.idCiudad).subscribe(() => {
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

