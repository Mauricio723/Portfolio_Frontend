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
  tituloFormulario : String = "";

  constructor(private servicioAdmin : AdminService) { }
  
  ngOnInit(): void {
    this.nombreAptitud = "Nombre aptitud sin definir";
    this.descripcionAptitud = "Descripción aptitud sin definir";
    this.idPersona = this.datosMyApi.id;   
  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdmin.obtenerTipoUsuario() === "ROLE_ADMIN";
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

}
