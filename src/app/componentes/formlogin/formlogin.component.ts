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

  constructor(private myFormBuilder: FormBuilder,
    private autenticService: AutenticacionService,
    private ruta: Router) {
 
    this.form_group = this.myFormBuilder.group({
      nombreUsuario: [""],
      password: [""]
    });
  }

  ngOnInit(): void {
  }

  /* Creamos una propiedad para obtener  nombreUsuario en el formControl */

  get NombreUsuario() {
    return this.form_group.get("nombreUsuario");
  }

  /* propiedades para obtner el email  y el password  en los formControl 
  
  get Email() {
    return this.form_group.get("email");
  }                                            */

  get Password() {
    return this.form_group.get("password");
  }

  /* Creamos el método que será llamado al presionar el botón del formulario */

  onEnviar(evento: Event) {
    evento.preventDefault;
    /* Nos suscribimos al método del servicio */    
    this.autenticService.iniciarSesion(this.form_group.value).subscribe(
      data => {
      //console. log("Datos del JSON, en onIniciarSesion: " + JSON.stringify(data));      
      this.ruta.navigate(["/secciones"])
    });
  }

}
