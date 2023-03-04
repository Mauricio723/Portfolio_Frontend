import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/Educacion';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  @Input() datosMyApi : any;

  educacion : Educacion = {
    nombreInstitucion: "",
    estudioCursado: "",
    anioInicio: 0,
    anioFin: 0,
    descripcionCurso: "",
    seTerminoCurso: 0
  };

  nombreInstitucion : String;
  estudioCursado : String;
  anioInicio : number;
  anioFin : number;
  descripcionCurso : String;
  seTerminoCurso : number;
  
  idPersona : number = 0;

  listaCiudades : any;

  idEducacionSeleccionado : number = 0;
  idCiudad : number = 0;
 
  mostrarBotones : Boolean = false;

  mostrarFormularioDatos : Boolean = false;

  esFormularioEditar : Boolean = false;
  esFormularioCrear : Boolean = false;

  constructor(private servicioAdmin : AdminService) { 
    
    this.nombreInstitucion = "Nombre Institución sin definir";
    this.estudioCursado = "Estudio cursado sin definir";
    this.anioInicio = 0;
    this.anioFin = 0;
    this.descripcionCurso = "Descripción del curso sin definir";
    this.seTerminoCurso = 0;
   
  } 
  
  ngOnInit(): void {   

    this.servicioAdmin.traerCiudades().subscribe(
      datosCiudades => {
        this.listaCiudades = datosCiudades;        
      }
    );      

  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
  }


  accionBotonEditar(idParaEditar : number, educacionParaEditar : Educacion) {
    //this.educacion = educacionParaEditar;

    this.idEducacionSeleccionado = idParaEditar;

    this.nombreInstitucion = educacionParaEditar.nombreInstitucion;
    this.estudioCursado = educacionParaEditar.estudioCursado;
    this.anioInicio = educacionParaEditar.anioInicio;
    this.anioFin = educacionParaEditar.anioFin;
    this.descripcionCurso = educacionParaEditar.descripcionCurso;
    this.seTerminoCurso = educacionParaEditar.seTerminoCurso;

    //this.idEducacionSeleccionado = idParaEditar;
    
    this.esFormularioEditar = true;
    this.esFormularioCrear = false;
    this.mostrarFormularioDatos = true;

  }
  accionBotonEliminar(idParaEliminar : number) {
    //alert("Se presionó el boton Eliminar para el  id: " + idParaEliminar);
    if (confirm("Está seguro de la eliminación del Estudio id: " + idParaEliminar)) {
      this.servicioAdmin.eliminarEducacion(idParaEliminar).subscribe(() => {
        window.location.reload();
      });

    } else {
      alert("Se canceló la eliminación de Educacion id: " + idParaEliminar);
    }
  }

  accionBotonCrearNuevo() {   
    this.esFormularioCrear = true;
    this.esFormularioEditar = false;
    this.mostrarFormularioDatos = true;   
  }

  accionFormularioDatos () {
    
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
