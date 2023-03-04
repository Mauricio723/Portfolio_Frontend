import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { AdminService } from 'src/app/servicios/admin.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  //datosJsonProyectos: any;

  @Input() datosProyectos: any;

  proyecto: Proyecto = {
    nombre: "",
    descripcion: ""
  };

  idProyecto: number = 0;
  nombre: String = "";
  descripcion: String = "";

  // variables booleanas para mostrar formularios y botones
  mostrarBotones: Boolean = true;
  mostrarFormularioEdicion: Boolean = false;
  mostrarFormularioAgregar: Boolean = false;

  idParaModificar: number = 0;

  operacionCancelada: Boolean = false;

  idPersona: number = 0;

  datoPrueba: any;

  constructor(private servicioAdministrador: AdminService,
    private router: Router) {

    //this.tipoUsuario = this.servicioAdministrador.obtenerTipoUsuario();
  }

  ngOnInit(): void {

    console.log("Tipo de usuario: " + this.servicioAdministrador.obtenerTipoUsuario());

  }

  esUsuarioAdmin(): Boolean {
    return this.servicioAdministrador.obtenerTipoUsuario() === "ROLE_ADMIN";
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


    /*
     if (id !=undefined) {
      this.sExperiencia.delete(id).subscribe(data=>{
        //Volver a cargar la lista, pero sin la expe eliminada
        this.cargarExperiencia();
      }, err=>{
        alert("No se pudo eliminar el registro")
      }
      );
    */
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

  /*
  enviarModificación() : void {

    this.servicioAdministrador.modificarProyecto(
                      // falta el id                       
                       this.proyecto).subscribe(data => {
      window.location.reload();                  
      //this.router.navigate(["/secciones"]);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(["/secciones"]);
       */
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


}
