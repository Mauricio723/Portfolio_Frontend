import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.css']
})

export class ConfigUserComponent implements OnInit {

  mostrarConfiguracion: boolean = false;
  botonConfigActivo: boolean;

  colorFondoNuevo: string = "";
  colorTextoNuevo: string = "";

  rootVariableStyle: any;

  colorOscuro: string;
  colorClaro: string;

  tipoColorFondo: string;

  textoColorOscuro: string = "";
  textoColorClaro: string = "";

  checkedInputOscuro: boolean = false;
  checkedInputClaro: boolean = true;

  // variables utilizadas en el control del tamaño del texto

  anchoNavegador: number;
  fontSizeSelect: string;
  fontSizeNuevo: string; 
  fontSizeRelativo: number;
  fontSizePorAnchoNavegador : number;
 
  constructor() {

    this.botonConfigActivo = true;

    this.colorOscuro = "rgb(0,0,0)";
    this.colorClaro = "rgb(255,255,255)";

    this.colorFondoNuevo = "#C2D3E4"
    this.colorTextoNuevo = "#FF00FF";

    this.tipoColorFondo = "fondo_claro";

    this.textoColorOscuro = "Color _Texto";
    this.textoColorClaro = "Color Fondo";

    this.fontSizeSelect = "100";
    this.fontSizeNuevo = "";
    
    this.anchoNavegador = 0;   
    this.fontSizeRelativo = 1;
    this.fontSizePorAnchoNavegador = 0;
   
  }

  ngOnInit(): void {

    this.rootVariableStyle = document.documentElement;

    this.obtenerDatosSessionStorage();

    this.establecerColoresPagina();

    this.establecerFontSize();

  }

  // evento que detecta cambio en el ancho de la ventana, para establecer los valores
  // para el tamaño de las fuentes.


  clkBtnPersonalizarPagina() {

    this.mostrarConfiguracion = true;
    this.botonConfigActivo = false;

  }

  // comprobamos si los valores para colores y tamaño de fuente, ya se encuentran
  // guardados en sessionStorage.

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
    if (sessionStorage.getItem("fontSizeGuardada") != undefined) {
      this.fontSizeSelect = "" + sessionStorage.getItem("fontSizeGuardada");
    } else {
      this.fontSizeSelect = "100";
    }

  }

  // Recordar que el input radio determina si el fondo es oscuro o claro

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
      this.textoColorClaro = "Color _Texto";
    }

    if (this.tipoColorFondo === "fondo_claro") {
      this.checkedInputOscuro = false;
      this.checkedInputClaro = true;
      this.colorFondoNuevo = this.colorClaro;
      this.colorTextoNuevo = this.colorOscuro;
      this.textoColorClaro = "Color Fondo";
      this.textoColorOscuro = "Color _Texto";
    }

    this.rootVariableStyle.style.setProperty("--color_fondo_01", this.colorFondoNuevo);

    this.rootVariableStyle.style.setProperty("--color_texto_01", this.colorTextoNuevo);

  }

  seleccionColorSpanOscuro(colorSpanOscuro : string) {

    this.colorOscuro = colorSpanOscuro;

    this.establecerColoresPagina();

  }

  seleccionColorSpanClaro(colorSpanClaro : string) {
    this.colorClaro = colorSpanClaro;
    this.establecerColoresPagina();
  }

  /*
  changeSelectColores() {
    this.establecerColoresPagina();
  } */

  // tamaño de fuentes para las 6 variables establecidas en archivo style.css

  establecerFontSize() {

    this.anchoNavegador = window.innerWidth;
    
    if (this.anchoNavegador <= 200) {
      this.fontSizePorAnchoNavegador = -20;
    }
    if (this.anchoNavegador > 200 && this.anchoNavegador <= 500) {
      this.fontSizePorAnchoNavegador = -10;
    }
    if (this.anchoNavegador > 500 && this.anchoNavegador <= 700) {
      this.fontSizePorAnchoNavegador = 0;
    }
    if (this.anchoNavegador > 700 && this.anchoNavegador <= 900) {
      this.fontSizePorAnchoNavegador = 10;
    }
    if (this.anchoNavegador > 900 && this.anchoNavegador <= 1100) {
      this.fontSizePorAnchoNavegador = 20;
    }
    if (this.anchoNavegador > 1100 && this.anchoNavegador <= 1200) {
      this.fontSizePorAnchoNavegador = 30;
    }
    if (this.anchoNavegador > 1200) {
      this.fontSizePorAnchoNavegador = 40;
    }   
    
    this.fontSizeRelativo = this.fontSizePorAnchoNavegador + parseFloat(this.fontSizeSelect);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo)/ 100 + "em";    
   this.rootVariableStyle.style.setProperty("--font_size_01", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 20) / 100 + "em";
   this.rootVariableStyle.style.setProperty("--font_size_02", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 40) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_03", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 50) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_04", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 60) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_05", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 80) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_06", this.fontSizeNuevo);

  }

  guardarConfigPagina() {

    sessionStorage.setItem("colorOscuroGuardado", this.colorOscuro);
    sessionStorage.setItem("colorClaroGuardado", this.colorClaro);
    sessionStorage.setItem("tipoFondoGuardado", this.tipoColorFondo);
    sessionStorage.setItem("fontSizeGuardada", this.fontSizeSelect);

    this.mostrarConfiguracion = false;
    this.botonConfigActivo = true;
  }
 
  volverAConfiguracionPredeterminada() {

    sessionStorage.removeItem("colorOscuroGuardado");
    sessionStorage.removeItem("colorClaroGuardado");
    sessionStorage.removeItem("tipoFondoGuardado");
    sessionStorage.removeItem("fontSizeGuardada");

    this.colorOscuro = "rgb(0,0,0)";
    this.colorClaro = "rgb(255,255,255)";
    this.tipoColorFondo = "fondo_claro";
    this.fontSizeSelect = "100";

    this.obtenerDatosSessionStorage();

    this.establecerColoresPagina();

    this.establecerFontSize();

    this.mostrarConfiguracion = false;
    this.botonConfigActivo = true;

  }

  clkBtnSalirDeConfiguracion() {

    this.mostrarConfiguracion = false;
    this.botonConfigActivo = true;

  }

}
