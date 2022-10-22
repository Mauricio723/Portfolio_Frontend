import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  datosJsonEdu: any;
  
  constructor(private servicio_portfolio: PortfolioService) { }

  ngOnInit(): void {

    this.servicio_portfolio.obtenerDatos_01().subscribe(
      datosEducacion => {
        this.datosJsonEdu = datosEducacion;
      }
    );   

  }

}
