import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  datosJson_01: any;
  botonPresionado: string= "";
  datoQuienSoy: string= "";
  botonEdicion: string= "";

  constructor(private servicioPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datos => {      
        this.datosJson_01 = datos;
      }
    );
  }

  eventoBotonQuienSoy() {
    this.botonPresionado= "boton_01";
  }

  eventoBotonDatosPersonales() {
    this.botonPresionado="boton_02";
  }

  eventoBotonContacto() {
    this.botonPresionado= "boton_03";
  }

  eventoInfoProf() {
    this.botonPresionado= "boton_04";
  }
 
  cerrarSeccion() {
    this.botonPresionado="";
  }
}
