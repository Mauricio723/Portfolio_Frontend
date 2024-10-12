import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}  

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  urlDatosTienda : string = "./assets/Datos_01/datos-tienda-02.json";

  constructor(private myhttp : HttpClient) { }

  traerDatosTienda() : Observable<any> {
    return this.myhttp.get<any>(this.urlDatosTienda);
  }


}
