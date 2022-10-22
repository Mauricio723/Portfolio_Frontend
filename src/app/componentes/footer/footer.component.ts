import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datosJsonFooter: any;

  mostrarContenido: boolean= false;

  constructor(private servicioPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosFooter => {
        this.datosJsonFooter= datosFooter;
      }
    );
  }
  
  cambiarMostrarContenido() {
    if(this.mostrarContenido) {
      this.mostrarContenido= false;
    } else {
      this.mostrarContenido= true;
    }
  } 

}
