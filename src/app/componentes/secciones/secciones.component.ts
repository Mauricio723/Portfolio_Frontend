import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  contenidoSessionStorage : any;

  datosThisPersona : any;
  datosEducacion : any;
  datosTrabajos : any;
  datosAptitudes : any;
  datosProyectos : any; 

  idThisPersona : number = 0;

  constructor(private servicioPortfolio : PortfolioService) {

    this.contenidoSessionStorage = sessionStorage.getItem("currentUser");

  }

  ngOnInit(): void {

    window.setTimeout(this.pausaDatos ,3000);  

    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosApi => {       
        this.datosThisPersona = datosApi[0];    

        this.idThisPersona = this.datosThisPersona.id;

        this.obtenerEducacion();

      }
    );   

  }

  pausaDatos() {    
  }

  obtenerEducacion() {
    
    this.servicioPortfolio.traerEducacionByPersonaId(this.idThisPersona).subscribe(
      datosApi => {
        this.datosEducacion = datosApi;

        this.obtenerTrabajos();

      }
    );
  }

  obtenerTrabajos() {
    
    this.servicioPortfolio.traerTrabajosByPersonaId(this.idThisPersona).subscribe(
      datosApi => {
        this.datosTrabajos = datosApi;

        this.obtenerAptitudes();

      }
    );
  }

  obtenerAptitudes() {
    
    this.servicioPortfolio.traerAptitudesByPersonaId(this.idThisPersona).subscribe(
      datosApi => {
        this.datosAptitudes = datosApi;

        this.obtenerProyectos();

      }
    );
  }

  obtenerProyectos() {
    
    this.servicioPortfolio.traerProyectosByPersonaId(this.idThisPersona).subscribe(
      datosApi => {
        this.datosProyectos = datosApi;
      }
    );
  }

}
