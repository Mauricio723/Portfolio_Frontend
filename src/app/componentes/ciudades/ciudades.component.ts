import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/modelos/Ciudad';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudad: Ciudad = {
    nombre: "",
    provincia: "",
    pais: ""
  };

  @Output()    
  eventoDesdeCiudad = new EventEmitter<Boolean>();
  
  seIngresoNuevaCiudad : Boolean = false;

  @Input() ciudadesExistentes: any;

   laCiudadNoExiste : Boolean = true;
  
   respuestaSolicitud : any;  

  constructor(private servicioAdmin: AdminService, private myRuta: Router) {

    this.respuestaSolicitud = new Response();

  }

  ngOnInit(): void {
    //this.mensaje = "Se completaron las tareas desde Ciudad";
  }

  accionFormularioCrear() {

    for (let ciudadParaComparar of this.ciudadesExistentes) {

      if (ciudadParaComparar.nombre.toLowerCase() === this.ciudad.nombre.toLowerCase() ) {
      //if (ciudadParaComparar.nombre === this.ciudad.nombre) {
        alert("la ciudad ingresada ya existe en la base de datos");
        this.laCiudadNoExiste = false;
      } 
    }

    if (this.laCiudadNoExiste && confirm("Confirmación de envío para nueva ciudad")) {

      this.servicioAdmin.crearCiudad(this.ciudad).subscribe(() => {
        //this.myRuta.navigate(["/secciones"]);    
        //alert("Status de la petición: " + this.respuestaSolicitud.status);           
      });

       this.seIngresoNuevaCiudad = true; 
       
    } else {
      this.seIngresoNuevaCiudad = false;     
    }

    if (this.respuestaSolicitud.status === 200) {
      alert("La ciudad fue ingresada correctamente - Status: " 
        + this.respuestaSolicitud.status);
    } else {
      alert("Ocurrió un error al ingresar la ciudad - Status: " 
        + this.respuestaSolicitud.status);
    } 
    //this.eventoDesdeCiudad.emit(this.mensaje);
    this.eventoDesdeCiudad.emit(this.seIngresoNuevaCiudad);
  }

}
