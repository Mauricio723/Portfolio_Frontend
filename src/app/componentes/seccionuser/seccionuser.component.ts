import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-seccionuser',
  templateUrl: './seccionuser.component.html',
  styleUrls: ['./seccionuser.component.css']
})
export class SeccionuserComponent implements OnInit {

  datosPersonaDto : any;  
  datosEducacion : any;
  datosTrabajos : any;
  datosAptitudes : any;
  datosProyectos : any;

  idPersona : number = 0;

  textoTooltip01 : String = "";
  
  textoTooltipAcercaDe : String = "";
  textoTooltipEducacion : String = "";
  textoTooltipTrabajo : String = "";
  textoTooltipAptitudes : String = "";
  textoTooltipProyectos : String = "";

  tooltipCiudadPersona : String = "";
  
  mostrarDatosPersona : Boolean = false;
  mostrarCiudadPersona : Boolean = false;
  mostrarAcercaDe : Boolean = false;
  mostrarEducacion : Boolean = false; 
  mostrarTrabajos : Boolean = false;  
  mostrarAptitudes : Boolean = false;
  mostrarProyectos : Boolean = false;

  constructor(private servicioPortfolio : PortfolioService) {
    
    this.textoTooltip01 = "Presionar para mostrar datos personales";
    this.textoTooltipAcercaDe = "Presionar para mostrar AcercaDe";
    this.textoTooltipEducacion = "Presionar para mnostrar Formación Académica";
    this.textoTooltipTrabajo = "Presionar para mostrar Experiencia Laboral";
    this.tooltipCiudadPersona = "Presionar para mostrar ubicación";
    this.textoTooltipAptitudes = "Presionar para mostrar Aptitud";
    this.textoTooltipProyectos = "Presionar para mostrar Proyectos";
    
   }

  ngOnInit(): void {

    this.servicioPortfolio.obtenerDtoPersona().subscribe(
      datosApi => {
        this.datosPersonaDto = datosApi;
        //console.log("datos persona_dto: " + JSON.stringify(this.datosPersonaDto));
        this.idPersona = this.datosPersonaDto.id;
        this.obtenerEducacion();
      }
    );    

  }

  obtenerEducacion() {    
    this.servicioPortfolio.traerEducacionByPersonaId(this.idPersona).subscribe(
      datosApiTrabajo => {
        this.datosEducacion = datosApiTrabajo;
        this.obtenerTrabajos();
      }
    );
  }
 
  obtenerTrabajos() {
    this.servicioPortfolio.traerTrabajosByPersonaId(this.idPersona).subscribe(
      datosApiTrabajo => {
        this.datosTrabajos = datosApiTrabajo;
        this.obtenerAptitudes();
      }
    );
  }

  obtenerAptitudes() {    
    this.servicioPortfolio.traerAptitudesByPersonaId(this.idPersona).subscribe(
      datosApiAptitud => {
        this.datosAptitudes = datosApiAptitud;
        this.obtenerProyectos();
      }
    );
  }

  obtenerProyectos() {    
    this.servicioPortfolio.traerProyectosByPersonaId(this.idPersona).subscribe(
      datosApiProyectos => {
        this.datosProyectos = datosApiProyectos;
      }
    );
  }

  clkBtnMostrarDatos01() {
    if (this.mostrarDatosPersona) {
      this.mostrarDatosPersona = false;
      this.textoTooltip01 = "Presionar para mostrar datos personales";
    } else {
      this.mostrarDatosPersona = true;
      this.textoTooltip01 = "Presionar para ocultar datos personales";
    }
  }
 
  clkBtnMostrarCiudadPersona() {

    if (this.mostrarCiudadPersona) {
      this.mostrarCiudadPersona = false;
      this.tooltipCiudadPersona = "Presionar par mostrar ubicación";
    } else {
      this.mostrarCiudadPersona = true;
      this.tooltipCiudadPersona = "Presionar para ocultar ubicación";
    }
  }  

  clkBtnMostrarAcercaDe() {
    if (this.mostrarAcercaDe) {
      this.mostrarAcercaDe = false;
      this.textoTooltipAcercaDe = "Presionar para mostrar AcercaDe";
    } else {
      this.mostrarAcercaDe = true;
      this.textoTooltipAcercaDe = "Presionar para ocultar AcercaDe";
    }
  }

  clkBtnMostrarEducacion() {
    if (this.mostrarEducacion) {
      this.mostrarEducacion = false;
      this.textoTooltipEducacion = "Presionar para mostrar formación académica";
    } else {
      this.mostrarEducacion = true;
      this.textoTooltipEducacion = "Presionar para ocultar formación académica";
    }
  } 

  clk_Btn_MostrarTrabajos() {
    if (this.mostrarTrabajos) {
      this.mostrarTrabajos = false;
      this.textoTooltipTrabajo = "Presionar para mostrar Experiencia Laboral";
    } else {
      this.mostrarTrabajos = true;
      this.textoTooltipTrabajo = "Presionar para ocultar Experiencia Laboral";
    }
  }

  clk_Btn_MostrarAptitudes() {
    if (this.mostrarAptitudes) {
      this.mostrarAptitudes = false;
      this.textoTooltipAptitudes = "Presionar para mostrar Aptitudes";
    } else {
      this.mostrarAptitudes = true;
      this.textoTooltipAptitudes = "Presionar para ocultar Aptitudes";
    }
  }

  clk_Btn_MostrarProyectos() {
    if (this.mostrarProyectos) {
      this.mostrarProyectos = false;
      this.textoTooltipProyectos = "Presionar para mostrar Proyecos";
    } else {
      this.mostrarProyectos = true;
      this.textoTooltipProyectos = "Presionar para ocultar Proyectos";
    }    
  }
  

}
