import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  contenidoSessionStorage : any;

  datosPortfolio : any;

  constructor(private servicioPortfolio : PortfolioService) {

    this.contenidoSessionStorage = sessionStorage.getItem("currentUser");

  }

  ngOnInit(): void {

    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosApi => {       
        this.datosPortfolio = datosApi[1];    
        //console.log("DAtos Portfolio: " + JSON.stringify(this.datosPortfolio));           
      }
    );   

  }

}
