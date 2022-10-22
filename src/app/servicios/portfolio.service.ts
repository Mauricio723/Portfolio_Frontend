import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
'Content-Type':'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  constructor (private myhttp: HttpClient) { }
   
  
  obtenerDatos_01(): Observable<any>  {        
    return this.myhttp.get("./assets/Datos_01/datosPortfolio_01.json");    
  }
  
  /*
  modificarDatos_01(textoModificacion: any): Observable<any> {
    return this.myhttp.post("./assets/Datos_01/datosPortfolio_02.json",
    textoModificacion, httpOptions);
  }   */

  /*
   updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task, httpOptions) 
  }
  */
}
