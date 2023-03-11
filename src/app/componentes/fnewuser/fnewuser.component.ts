import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-fnewuser',
  templateUrl: './fnewuser.component.html',
  styleUrls: ['./fnewuser.component.css']
})

export class FnewuserComponent implements OnInit {


  formGroupNew : FormGroup;  

  constructor(private formBuilderNew : FormBuilder, 
              private servicioAuth : AutenticacionService, 
              private rutaNuevo : Router) {

    this.formGroupNew = this.formBuilderNew.group({
      nombre: [""],
      nombreUsuario: [""],
      email: [""],
      password: [""]
    });
   
   }

  ngOnInit(): void {
    
  }

   get Nombre() {
    //return this.formGroupNew.get("nombre");
    return this.formGroupNew.get("nombre");
   }

   get NombreUsuario() {
    return this.formGroupNew.get("nombreUsuario");
  }

  get Email() {
    return this.formGroupNew.get("email");
  }
 
  get Password() {
    return this.formGroupNew.get("password");
  }

  onEnviarNewUser(evento: Event) {

    evento.preventDefault;    

    this.servicioAuth.nuevoUsuario(this.formGroupNew.value).subscribe( data => {
      this.rutaNuevo.navigate(["/login"])
    } );

  }

}
