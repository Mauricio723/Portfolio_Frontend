import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  datosJsonTrabajos: any;

  constructor(private servicioPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosTrabajo => {
        this.datosJsonTrabajos= datosTrabajo;
      }
    );
  }

}
