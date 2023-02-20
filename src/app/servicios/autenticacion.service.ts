import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  /* creamos el String con la url de la api, lo siguiente es un ejemplo.
  Para nuestro caso cambiarlo por la url de nuestra api en SpringBoot */
  url_login = "http://localhost:8080/auth/login";

  private currentUserSubject : BehaviorSubject<any>;
    
  constructor(private http_cliente : HttpClient) { 
    //console.log("El servicio de autenticación está corriendo");         
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(
      sessionStorage.getItem("currentUser") || "{}"));
     
    }
  /* Método para llamar a la API */

  iniciarSesion(credenciales: any) : Observable<any> {  
    return this.http_cliente.post(this.url_login, credenciales).pipe(map(datos => {
       sessionStorage.setItem("currentUser", JSON.stringify(datos));
       this.currentUserSubject.next(datos);
       return datos;  
       }));     
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }   

  cerrarSesion() {
    /*Borramos el contenido de currentUser*/
    sessionStorage.removeItem("currentUser");    
  }

}
