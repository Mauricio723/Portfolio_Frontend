import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ProtexGuard implements CanActivate {

  constructor(private servicioAutenticacion : AutenticacionService, 
              private myRouter : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean 
                                | UrlTree> | boolean | UrlTree {
   
      let currentUser = this.servicioAutenticacion.UsuarioAutenticado;

      if (currentUser && currentUser.token) {
        return true;
      } else {
        this.myRouter.navigate(["/login"]);
        return false;
      }
     
      //return true;
  }
  
}
