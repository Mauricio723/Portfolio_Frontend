import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  datosJsonProyectos: any;

  @Input() datosProyectos : any;
  
  constructor() { }

  // private servicioPortfolio: PortfolioService
  
  ngOnInit(): void {

    /*
    console.log("Dentro de ngOnInit en Proyectos_ts");
    
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosProyectos => {
        this.datosJsonProyectos= datosProyectos;
      }
    );   */
  }

}
