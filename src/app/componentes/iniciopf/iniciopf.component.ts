
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciopf',
  templateUrl: './iniciopf.component.html',
  styleUrls: ['./iniciopf.component.css']
})
export class IniciopfComponent implements OnInit {


  tituloInicio: any;
   
  constructor() {
   
  }

  ngOnInit(): void {
    
    if (sessionStorage.getItem("mensajeSession")) {

      this.tituloInicio = sessionStorage.getItem("mensajeSession");

    } else {
      this.tituloInicio = "Inicio Portfolio";
    }
 
   
  }

}
