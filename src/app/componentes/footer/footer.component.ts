import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mostrarDerechosAutor : Boolean = false;
  mostrarAbout : Boolean = false;

  constructor() { }
  
  ngOnInit(): void {
    
  }

  eventoBtnDerechos() {
    if(this.mostrarDerechosAutor) {
      this.mostrarDerechosAutor= false;
    } else {
      this.mostrarDerechosAutor= true;
      //this.mostrarAbout = false;
    }
  }
  eventoBtnAbout() {
    if(this.mostrarAbout) {
      this.mostrarAbout = false;
    } else {
      this.mostrarAbout = true;
      //this.mostrarDerechosAutor = false;
    }
  }  

}
