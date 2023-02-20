import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //datosPersona : any;
  //arregloPersonas : Object[] = [];

  textoPrueba : String = "";

  datosJson_01: any;
  botonPresionado: string= "";
  datoQuienSoy: string= "";
  botonEdicion: string= "";

  @Input() datosPersona : any;


  constructor(private servicioPortfolio: PortfolioService) { }


  ngOnInit(): void {    

    //this.servicioPortfolio.obtenerDatos_01().subscribe(
      //datosApi => {
        //this.datosPersona = datosApi[0];
        //this.datosPersona = datosApi[0];

        //console.log("datosApi: " + datosApi[0].nombre); 
        //console.log("Datos en forma deJson: " + JSON.stringify(datosApi));  
                
      //}
    //);
       
    /*    
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datos => {      
        this.datosJson_01 = datos;
        console.log("datos desde datosJson_01: " + datos);
      }
    );    */
    
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
