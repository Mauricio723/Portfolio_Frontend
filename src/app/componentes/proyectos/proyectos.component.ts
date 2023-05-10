import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() datosMyApi : any;
  @Input() idPersona : any;

  proyecto: Proyecto = {
    nombre: "",
    descripcion: "",
    fechaPublicacion: "",
    persona_id: 0   
  };

  //idProyecto: number = 0;


  nombreProyecto: String = "";
  descripcionProyecto: String = "";
  fechaPublicacion: String = "";

  idProyectoSeleccionado : number = 0;

  mostrarFormularioDatos : Boolean = false;
  esFormularioEdicion : Boolean = false;
  esFormularioCrear : Boolean = false;

  tituloFormulario : String = "";

  mostrarProyectos01 : Boolean = false;

  constructor(private servicioAdministrador: AdminService,
    private router: Router) {
    
  }

  ngOnInit(): void {

    this.nombreProyecto = "Nombre proyecto sin definir";
    this.descripcionProyecto = "Descripción proyecto sin definir";
    this.fechaPublicacion = "Fecha Publicación sin definir";

  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdministrador.obtenerTipoUsuario() === "ROLE_ADMIN";
  }

  eventoBtnMostrarProyectos() {
    this.mostrarProyectos01 = true;
  }
  eventoBtnOcultarProyectos() {
    this.mostrarProyectos01 = false;
  }

  eventoBtnEditar(idProyectoEditar : number, proyectoParaEditar : any) {

    this.tituloFormulario = "Formulario para editar";

    this.mostrarFormularioDatos = true;
    this.idProyectoSeleccionado = idProyectoEditar;
    this.esFormularioEdicion = true;
    this.esFormularioCrear = false;

    this.nombreProyecto = proyectoParaEditar.nombre;
    this.descripcionProyecto = proyectoParaEditar.descripcion;   
  }

  eventoBtnEliminar(idEliminar: number) : void {     

    if (confirm("Esta seguro de la eliminación del proyecto con id: " + idEliminar)) {
      this.servicioAdministrador.eliminarProyecto(idEliminar).subscribe(() => {
        window.location.reload();
      } );
    }    
  }

  eventoBtnCrearNuevo() {

    this.tituloFormulario = "Formulario para Crear nuevo proyecto";
    this.esFormularioCrear = true;
    this.esFormularioEdicion = false;
    this.mostrarFormularioDatos = true;  
  }

  eventoFormularioDatos() {

    if (this.esFormularioCrear && confirm("Está seguro del envío de datos ?")) {

      this.proyecto.nombre = this.nombreProyecto;
      this.proyecto.descripcion = this.descripcionProyecto;
      this.proyecto.fechaPublicacion = this.fechaPublicacion;
      this.proyecto.persona_id = this.idPersona;

      this.servicioAdministrador.crearNuevoProyecto(this.proyecto).subscribe(() => {
          window.location.reload();
        });
    }

    if (this.esFormularioEdicion && confirm("Está seguro del envio de datos ?")) {

      this.proyecto.nombre = this.nombreProyecto;
      this.proyecto.descripcion = this.descripcionProyecto;
      this.proyecto.fechaPublicacion = this.fechaPublicacion;
      this.proyecto.persona_id = this.idPersona;

      this.servicioAdministrador.modificarProyecto(
        this.idProyectoSeleccionado, this.proyecto).subscribe(() => {
          window.location.reload();
        });
    }

    this.mostrarFormularioDatos = false;

  }

}
