import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datosJsonHeader: any;

  constructor(private servicioPortfolio: PortfolioService) 
  { }

  ngOnInit(): void {
    this.servicioPortfolio.obtenerDatos_01().subscribe(
      datosHeader => {
        this.datosJsonHeader= datosHeader;
      }
    );
  } 

}
