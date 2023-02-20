import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private servicioAutenticacion: AutenticacionService) { }

  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser = this.servicioAutenticacion.UsuarioAutenticado;     

    if (currentUser && currentUser.token) {
       /* clonamos el request para situar en el encabezado el token */
      currentUser.token;
      //console.log("if currentUser, valor enviado: " + currentUser.token);
      request = request.clone({
        setHeaders: {
          //Authorization: "Bearer $(currentUser.token)"
          Authorization : "Bearer " + currentUser.token
         //Authorization : currentUser.token
        }
      });
    }  
    //console.log("Interceptor está corriendo" + JSON.stringify(currentUser));
    /* dejamos que siga su curso el request */
    return next.handle(request);
  }

}
