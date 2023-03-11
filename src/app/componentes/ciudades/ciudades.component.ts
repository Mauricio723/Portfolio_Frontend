import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/modelos/Ciudad';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudad : Ciudad = {
    nombre: "",
    provincia: "",
    pais: ""
  };
  
  mensaje: string = "";

  @Output()
  eventoDesdeCiudad = new EventEmitter<String>();
  //propagar = new EventEmitter<String>();

  constructor (private servicioAdmin : AdminService, private myRuta : Router) {   

  }

  ngOnInit(): void {

    this.mensaje = "Se completaron las tareas desde Ciudad";
   
  }

  accionFormularioCrear() {
    
    if (confirm("Confirmación de los datos para la nueva ciudad")) {

      this.servicioAdmin.crearCiudad(this.ciudad).subscribe(() => {
        
        //this.myRuta.navigate(["/secciones"]);
      });

    } else {
      alert("El ingreso de nueva ciudad fué cancelado");
    }  

    this.eventoDesdeCiudad.emit(this.mensaje);

  }

}
