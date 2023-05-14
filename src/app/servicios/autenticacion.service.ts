import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {  
  
  // urls en desarrollo
  //url_login = "http://localhost:8080/auth/login";
  //url_nuevo = "http://localhost:8080/auth/nuevo";

  // urls en produccion Render
  url_login = "https://backporfolio.onrender.com/auth/login";
  url_nuevo = "https://backporfolio.onrender.com/auth/nuevo";

  private currentUserSubject : BehaviorSubject<any>;
    
  constructor(private http_cliente : HttpClient) { 
          
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(
      sessionStorage.getItem("currentUser") || "{}"));
     
    }
 
  iniciarSesion(credenciales: any) : Observable<any> {  
    return this.http_cliente.post(this.url_login, credenciales).pipe(map(datos => {
       sessionStorage.setItem("currentUser", JSON.stringify(datos));
       this.currentUserSubject.next(datos);
       return datos;  
       }));     
  }

  nuevoUsuario(datosNuevoUsuario : any) : Observable<any> {    

    return this.http_cliente.post<any>(this.url_nuevo, datosNuevoUsuario);
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  } 

}
