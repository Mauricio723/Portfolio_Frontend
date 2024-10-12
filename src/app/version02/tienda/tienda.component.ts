import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  datosTienda01 : any;

  constructor(private servicioTienda : TiendaService) { }

  ngOnInit(): void {

    this.obtenerDatosTienda();

  }

  obtenerDatosTienda() {
    this.servicioTienda.traerDatosTienda().subscribe(
      datosTienda => {
        
        this.datosTienda01 = datosTienda.usuario01;

        //console.log(JSON.stringify(datosTienda));
        //console.log(this.datosTienda01);

      }
    );

  }

  
}
