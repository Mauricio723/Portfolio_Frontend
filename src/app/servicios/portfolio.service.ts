import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}  */

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  // url en desarrollo
  //urlApi: String = "http://localhost:8080";

  // url en produccion Render
  urlApi: String = "https://backporfolio.onrender.com";

  constructor(private myhttp: HttpClient) { }


  obtenerDatos_01(): Observable<any> {

    return this.myhttp.get<any>(this.urlApi + 
      "/myapi/personas/traer_todas");

    //return this.myhttp.get("./assets/Datos_01/datosPortfolio_01.json");    
  }

  traerEducacionByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApi + 
      "/myapi/educacion/traerbypersona/" + idPersona);
  }

  traerTrabajosByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApi + 
      "/myapi/trabajos/traerbypersona/" + idPersona);
  }

  traerAptitudesByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApi + 
      "/myapi/aptitudes/traerbypersona/" + idPersona);
  }

  traerProyectosByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApi + 
      "/myapi/proyectos/traerbypersona/" + idPersona);
  }

}
