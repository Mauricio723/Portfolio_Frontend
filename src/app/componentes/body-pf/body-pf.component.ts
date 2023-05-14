import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-pf',
  templateUrl: './body-pf.component.html',
  styleUrls: ['./body-pf.component.css']
})
export class BodyPfComponent implements OnInit {
 
  constructor(private myruta : Router) { }

  ngOnInit(): void {   

    if (this.myruta.url.length <= 1 && !sessionStorage.getItem("mySession01")) {

      //alert("valor de inicioPagina: " + sessionStorage.getItem("mySession"));
      this.myruta.navigate(["/inicio"]);
      sessionStorage.setItem("mySession01", "sessionIniciada");
      sessionStorage.setItem("mensajeSession", "Bienvenidos al Portfolio Web de Mauricio");
                
    } 

  }

}
