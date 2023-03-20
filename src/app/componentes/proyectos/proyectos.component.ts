import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { AdminService } from 'src/app/servicios/admin.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  //datosJsonProyectos: any;

  @Input() datosMyApi: any;

  proyecto: Proyecto = {
    nombre: "",
    descripcion: ""
  };

  //idProyecto: number = 0;


  nombreProyecto: String = "";
  descripcionProyecto: String = "";

   idPersona: number = 0;

  idProyectoSeleccionado : number = 0;

  mostrarFormularioDatos : Boolean = false;
  esFormularioEdicion : Boolean = false;
  esFormularioCrear : Boolean = false;

  tituloFormulario : String = "";

  constructor(private servicioAdministrador: AdminService,
    private router: Router) {
    
  }

  ngOnInit(): void {

    this.nombreProyecto = "Nombre proyecto sin definir";
    this.descripcionProyecto = "Descripción proyecto sin definir";

  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdministrador.obtenerTipoUsuario() === "ROLE_ADMIN";
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

      this.idPersona = this.datosMyApi.id;   

      this.servicioAdministrador.crearNuevoProyecto(this.idPersona,
        this.proyecto).subscribe(() => {
          window.location.reload();
        });
    }

    if (this.esFormularioEdicion && confirm("Está seguro del envio de datos ?")) {

      this.proyecto.nombre = this.nombreProyecto;
      this.proyecto.descripcion = this.descripcionProyecto;

      this.servicioAdministrador.modificarProyecto(
        this.idProyectoSeleccionado, this.proyecto).subscribe(() => {
          window.location.reload();
        });
    }

    this.mostrarFormularioDatos = false;

  }

}
