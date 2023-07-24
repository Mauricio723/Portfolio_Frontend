import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})

export class FormloginComponent implements OnInit {

  form_group: FormGroup;  

  mostrarFormulario : Boolean = true;

  constructor(private myFormBuilder: FormBuilder,
    private autenticService: AutenticacionService,
    private ruta: Router) {
 
    this.form_group = this.myFormBuilder.group({
      nombreUsuario: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  /* Creamos una propiedad para obtener  nombreUsuario en el formControl */
  get NombreUsuario() {
    return this.form_group.get("nombreUsuario");
  }                                     

  get Password() {
    return this.form_group.get("password");
  }

  /* Creamos el método que será llamado al presionar el botón del formulario */

  onEnviar(evento: Event) {

    this.mostrarFormulario = false;
    
    evento.preventDefault;
    /* Nos suscribimos al método del servicio */    
    this.autenticService.iniciarSesion(this.form_group.value).subscribe(
      data => {   
      //this.ruta.navigate(["/secciones"])
      this.obtenerTipoUsuario();
    });
  }

  /* Según el tipo de usuario, mostramos una vista para los datos diferente */

  obtenerTipoUsuario() {
    
    if (this.autenticService.UsuarioAutenticado.authorities.length >= 2) {
      this.ruta.navigate(["/secciones"]);
    } else {      
      this.ruta.navigate(["/seccionuser"]);
    }

  }

}
