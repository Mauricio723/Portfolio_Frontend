import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  urlEducacion : String = "http://localhost:8080/myapi/educacion";

  constructor(private httpEducacion : HttpClient) { }

  obtenerEducacion(): Observable<any> {

    return this.httpEducacion.get<any>(this.urlEducacion + "/traer_todas");           
    
  }

/*
export class PortfolioService {
  
  urlApi: String = "http://localhost:8080";
  
  constructor (private myhttp: HttpClient) { }
   
  
  obtenerDatos_01(): Observable<any>  {     

    return this.myhttp.get<any>(this.urlApi + "/myapi/personas/traer_todas");
        
    //return this.myhttp.get("./assets/Datos_01/datosPortfolio_01.json");    
  }  

*/

}
