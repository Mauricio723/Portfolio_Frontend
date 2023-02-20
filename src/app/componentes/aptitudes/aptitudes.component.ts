import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  datosJsonAptitudes: any;

  @Input() datosAptitudes : any;
  
  constructor() { }

  // Inyección servicio constructor: 
  // private servicioPortfolio: PortfolioService
  
  ngOnInit(): void {
    /*
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosAptitudes => {
        this.datosJsonAptitudes= datosAptitudes;
      }
    );  */
  }

}
