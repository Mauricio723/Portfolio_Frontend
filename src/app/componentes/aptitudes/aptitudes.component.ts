import { Component, Input, OnInit } from '@angular/core';
import { Aptitud } from 'src/app/modelos/Aptitud';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  //datosJsonAptitudes: any;

  @Input() datosMyApi : any;  
  @Input() idPersona : any;

  aptitud : Aptitud = {
    nombre : "",
    descripcion : "",
    porcentaje : 0,
    persona_id : 0
  };

  nombreAptitud : String = "";
  descripcionAptitud : String = "";
  porcentajeAptitud : number = 0;

  idAptitudSeleccionada : number = 0;

  mostrarFormularioDatos : Boolean = false;

  formularioParaCrear : Boolean = false;
  formularioParaEditar : Boolean = false;
  tituloFormulario : String = "";

  mostrarAptitudes01 : Boolean = false;

  constructor(private servicioAdmin : AdminService) { }
  
  ngOnInit(): void {
    this.nombreAptitud = "Nombre aptitud sin definir";
    this.descripcionAptitud = "Descripción aptitud sin definir";
    this.porcentajeAptitud = 0;
    
  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
  }

  eventoBtnMostrarAptitudes() {
    this.mostrarAptitudes01 = true;
  }
  eventoBtnOcultarAptitudes() {
    this.mostrarAptitudes01 = false;
  }
  
  eventoBotonEditar(idAptitudModificar : number, aptitudEdit : any) {

    this.tituloFormulario = "Formulario para Editar Aptitud";
    this.mostrarFormularioDatos = true;
    this.formularioParaEditar = true;
    this.formularioParaCrear = false;
    this.idAptitudSeleccionada = idAptitudModificar;
    this.nombreAptitud = aptitudEdit.nombre;
    this.descripcionAptitud = aptitudEdit.descripcion;

  }

  eventoBotonEliminar(idAptitudEliminar : number) {

    if (confirm("Está seguro de eliminar aptitud con id: " + idAptitudEliminar)) { 
      this.servicioAdmin.eliminarAptitud(idAptitudEliminar).subscribe(() => {      
        window.location.reload();
    });
    } else {
      alert("La operación de eliminar aptitud fué cancelada");
    }  
  }

  eventoBotonCrearAptitud() {

    this.tituloFormulario = "Formulario para crear aptitud";
    this.mostrarFormularioDatos = true;
    this.formularioParaCrear = true;
    this.formularioParaEditar = false;  
  }
 
 eventoFormularioDatos() {

    if (this.formularioParaCrear && confirm("Está seguro de crear aptitud ?")) {

      this.aptitud.nombre = this.nombreAptitud;
      this.aptitud.descripcion = this.descripcionAptitud;
      this.aptitud.porcentaje = this.porcentajeAptitud;
      this.aptitud.persona_id = this.idPersona;

      this.servicioAdmin.crearAptitud(this.aptitud).subscribe(() => {
        window.location.reload();
      });
    } 

    if (this.formularioParaEditar && confirm("Está seguro de modificar aptitud ?")) {

      this.aptitud.nombre = this.nombreAptitud;
      this.aptitud.descripcion = this.descripcionAptitud;
      this.aptitud.porcentaje = this.porcentajeAptitud;
      this.aptitud.persona_id = this.idPersona;

      this.servicioAdmin.modificarAtitud(this.idAptitudSeleccionada, 
                                         this.aptitud).subscribe(() => {
        window.location.reload();
      });
    } 
    this.mostrarFormularioDatos = false;
  }

}
