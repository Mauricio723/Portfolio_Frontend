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

  //urlApi: String = "http://localhost:8080";

  urlApiRender: String = "https://backporfolio.onrender.com";

  constructor(private myhttp: HttpClient) { }


  obtenerDatos_01(): Observable<any> {

    return this.myhttp.get<any>(this.urlApiRender + 
      "/myapi/personas/traer_todas");

    //return this.myhttp.get("./assets/Datos_01/datosPortfolio_01.json");    
  }

  traerEducacionByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApiRender + 
      "/myapi/educacion/traerbypersona/" + idPersona);
  }

  traerTrabajosByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApiRender + 
      "/myapi/trabajos/traerbypersona/" + idPersona);
  }

  traerAptitudesByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApiRender + 
      "/myapi/aptitudes/traerbypersona/" + idPersona);
  }

  traerProyectosByPersonaId(idPersona: number): Observable<any> {
    return this.myhttp.get<any>(this.urlApiRender + 
      "/myapi/proyectos/traerbypersona/" + idPersona);
  }

}
