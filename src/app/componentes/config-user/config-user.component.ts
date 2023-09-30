import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.css']
})
export class ConfigUserComponent implements OnInit {

  mostrarConfiguracion : boolean = false;
  botonConfigDeshabilitado : boolean = false;

  colorFondoNuevo: string = "";
  colorTextoNuevo: string = "";

  rootVariableStyle: any;

  colorOscuro: string;
  colorClaro: string;

  tipoColorFondo: string;

  textoColorOscuro: string = "";
  textoColorClaro: string = "";

  sizeTextoNuevo: string;

  checkedInputOscuro : boolean = false;

  checkedInputClaro : boolean = true;


  constructor() {

    this.colorOscuro = "rgb(0,0,0)";
    this.colorClaro = "rgb(255,255,255)";

    this.colorFondoNuevo = "#C2D3E4"
    this.colorTextoNuevo = "#FF00FF";

    this.tipoColorFondo = "fondo_claro";

    this.textoColorOscuro = "Color Texto";
    this.textoColorClaro = "Color Fondo";

    this.sizeTextoNuevo = "1em";

   }

  ngOnInit(): void {

    this.rootVariableStyle = document.documentElement;

    this.obtenerDatosSessionStorage();    

    this.establecerColoresPagina();

  }

  clkBtnPersonalizarPagina() {

    this.mostrarConfiguracion = true;
    this.botonConfigDeshabilitado = true;

  }

  obtenerDatosSessionStorage() {

    if (sessionStorage.getItem("colorOscuroGuardado") != undefined) {
      this.colorOscuro = "" + sessionStorage.getItem("colorOscuroGuardado");
    }
    if (sessionStorage.getItem("colorClaroGuardado") != undefined) {
      this.colorClaro = "" + sessionStorage.getItem("colorClaroGuardado");
    }
    if (sessionStorage.getItem("tipoFondoGuardado") != undefined) {
      this.tipoColorFondo = "" + sessionStorage.getItem("tipoFondoGuardado");
    }
    
  }
  
  // métodos de cambiar estilos con variables

  obtenerValorInputRadio(tipoFondo: string) {

    this.tipoColorFondo = tipoFondo;

    this.establecerColoresPagina();

  }

  establecerColoresPagina() {

    if (this.tipoColorFondo === "fondo_oscuro") {
      this.checkedInputOscuro = true;
      this.checkedInputClaro = false;
      this.colorFondoNuevo = this.colorOscuro;
      this.colorTextoNuevo = this.colorClaro;
      this.textoColorOscuro = "Color Fondo";
      this.textoColorClaro = "Color Texto";
    }

    if (this.tipoColorFondo === "fondo_claro") {
      this.checkedInputOscuro = false;
      this.checkedInputClaro = true;
      this.colorFondoNuevo = this.colorClaro;
      this.colorTextoNuevo = this.colorOscuro;
      this.textoColorClaro = "Color Fondo";
      this.textoColorOscuro = "Color Texto";
    }

    this.rootVariableStyle.style.setProperty("--color_fondo_01", this.colorFondoNuevo);

    this.rootVariableStyle.style.setProperty("--color_texto_01", this.colorTextoNuevo);

  }

  changeSelectColores() {
    this.establecerColoresPagina();
  }

  cambiarSizeTexto() {

    this.rootVariableStyle.style.setProperty("--size_texto_01", this.sizeTextoNuevo);

  }

  guardarConfigPagina() {

    sessionStorage.setItem("colorOscuroGuardado", this.colorOscuro);
    sessionStorage.setItem("colorClaroGuardado", this.colorClaro);
    sessionStorage.setItem("tipoFondoGuardado", this.tipoColorFondo);
   
    this.mostrarConfiguracion = false;
    this.botonConfigDeshabilitado = false;
  }
    /*
  mostrarDatosSessionStorage() {

    console.log("Cantidad de elementos de sessionStorage: " + sessionStorage.length);
    console.log("Datos color Oscuro: " + sessionStorage.getItem("colorOscuroGuardado"));
    console.log("Datos color Claro: " + sessionStorage.getItem("colorClaroGuardado"));
    console.log("Datos tipo de fondo: " + sessionStorage.getItem("tipoFondoGuardado"));

  }   */

  volverAConfiguracionPredeterminada() {
     
    sessionStorage.removeItem("colorOscuroGuardado");
    sessionStorage.removeItem("colorClaroGuardado");
    sessionStorage.removeItem("tipoFondoGuardado");

    this.colorOscuro = "rgb(0,0,0)";
    this.colorClaro = "rgb(255,255,255)";
    this.tipoColorFondo = "fondo_claro";

    this.obtenerDatosSessionStorage();

    this.establecerColoresPagina();

    this.mostrarConfiguracion = false;
    this.botonConfigDeshabilitado = false;

  } 

  clkBtnSalirDeConfiguracion() {

    this.mostrarConfiguracion = false;
    this.botonConfigDeshabilitado = false;

  }

}
