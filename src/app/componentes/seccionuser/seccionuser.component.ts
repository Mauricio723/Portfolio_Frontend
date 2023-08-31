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

  mostrarMasDatosEducacion : Boolean[] = [];
  textoMostrarMasEducacion : String[] = [];

  mostrarMasDatosTrabajo : Boolean[] = [];
  textoMostrarMasTrabajo : String[] = [];

  colorFondo : String = "";
  colorTexto : String = "";

  fondoColor : Boolean = false;
  textoBotonColor : String = "";

  constructor(private servicioPortfolio : PortfolioService) {
    
    this.textoTooltip01 = "Presionar para mostrar datos personales";
    this.textoTooltipAcercaDe = "Presionar para mostrar AcercaDe";
    this.textoTooltipEducacion = "Presionar para mnostrar Formación Académica";
    this.textoTooltipTrabajo = "Presionar para mostrar Experiencia Laboral";
    this.tooltipCiudadPersona = "Presionar para mostrar ubicación";
    this.textoTooltipAptitudes = "Presionar para mostrar Aptitud";
    this.textoTooltipProyectos = "Presionar para mostrar Proyectos";
    
    this.colorFondo = "rgb(255,255,255)";
    this.colorTexto = "rgb(0,0,0)";
    this.textoBotonColor = "Ver Fondo Oscuro";

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
 
  clkBtnCambiarColor() {

    if (this.fondoColor) {     
      this.fondoColor = false;
      this.textoBotonColor = "Ver Fondo Oscuro";
      this.colorFondo = "rgb(255,255,255)";
      this.colorTexto = "rgb(0,0,0)";
    } else {      
      this.fondoColor = true;
      this.textoBotonColor = "Ver Fondo Claro";
      this.colorFondo = "rgb(55,70,60)";
      this.colorTexto = "rgb(240,236,225)";
    }

  } 

  obtenerEducacion() {    
    this.servicioPortfolio.traerEducacionByPersonaId(this.idPersona).subscribe(
      datosApiEducacion => {
        this.datosEducacion = datosApiEducacion;

        for (let indiceEdu=0; indiceEdu < this.datosEducacion.length; indiceEdu++) {
          this.mostrarMasDatosEducacion[indiceEdu] = false; 
          this.textoMostrarMasEducacion[indiceEdu] = "Mostrar más Datos";
        }

        this.obtenerTrabajos();
      }
    );
  }
 
  obtenerTrabajos() {
    this.servicioPortfolio.traerTrabajosByPersonaId(this.idPersona).subscribe(
      datosApiTrabajo => {
        this.datosTrabajos = datosApiTrabajo;

        for (let indice_trabajo=0; indice_trabajo < this.datosTrabajos.length; indice_trabajo++) {
          this.mostrarMasDatosTrabajo[indice_trabajo] = false; 
          this.textoMostrarMasTrabajo[indice_trabajo] = "Mostrar más Datos";
        }

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

   /* Método para mostrar más educación */
  
   clkBtnMostrarMasEducacion(indiceEducacion : number) {   

    if(this.mostrarMasDatosEducacion[indiceEducacion]) {
      this.mostrarMasDatosEducacion[indiceEducacion] = false;
      this.textoMostrarMasEducacion[indiceEducacion] = "Mostrar más Datos";
    } else {
      this.mostrarMasDatosEducacion[indiceEducacion] = true;
      this.textoMostrarMasEducacion[indiceEducacion] = "Mostrar menos Datos";
    }

  }
   /*  ----------- ----------------- */

  clk_Btn_MostrarTrabajos() {
    if (this.mostrarTrabajos) {
      this.mostrarTrabajos = false;
      this.textoTooltipTrabajo = "Presionar para mostrar Experiencia Laboral";
    } else {
      this.mostrarTrabajos = true;
      this.textoTooltipTrabajo = "Presionar para ocultar Experiencia Laboral";
    }
  }

   /* Método para mostrar más datos de trabajo */
  
   clkBtnMostrarMasTrabajo(indiceTrabajo : number) {   

    if(this.mostrarMasDatosTrabajo[indiceTrabajo]) {
      this.mostrarMasDatosTrabajo[indiceTrabajo] = false;
      this.textoMostrarMasTrabajo[indiceTrabajo] = "Mostrar más Datos";
    } else {
      this.mostrarMasDatosTrabajo[indiceTrabajo] = true;
      this.textoMostrarMasTrabajo[indiceTrabajo] = "Mostrar menos Datos";
    }

  }
   /*  ----------- ----------------- */

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
