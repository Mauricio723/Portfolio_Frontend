import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AutenticacionService } from './autenticacion.service';
import { Proyecto } from '../modelos/Proyecto';
import { Observable } from 'rxjs';
import { About } from '../modelos/About';
import { Educacion } from '../modelos/Educacion';
import { Trabajo } from '../modelos/Trabajo';
import { Aptitud } from '../modelos/Aptitud';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private urlApi : String = "http://localhost:8080/myapi";

  private largoArregloAutorities : number;  

  constructor(private servicioAutenticacion : AutenticacionService, 
              private myHttpClient : HttpClient) { 

    this.largoArregloAutorities = 
      this.servicioAutenticacion.UsuarioAutenticado.authorities.length;    
          
      console.log("largo del arreglo de autorización: " + this.largoArregloAutorities);

  }

  obtenerTipoUsuario() : String {   
    //return this.servicioAutenticacion.UsuarioAutenticado.authorities[
      //this.largoArregloAutorities - 2].authority;
    if (this.servicioAutenticacion.UsuarioAutenticado.authorities.length >= 2) {
      return "ROLE_ADMIN";
    } else {
      return "ROLE_USER";
    }
      
    //return this.servicioAutenticacion.UsuarioAutenticado.authorities[
      //this.largoArregloAutorities -1].authority;
      
  }

  // Datos Ciudad

  traerCiudades() : Observable<any> {
    return this.myHttpClient.get<any>(this.urlApi + "/ciudades/traer_todas");
  }

  // Datos Persona

  modificarPersona(personaEdit: About, 
                   idPersona: number, 
                   idCiucad : number) : Observable<any> {
                    
    return this.myHttpClient.put<any>(this.urlApi + "/personas/modificar/" 
                                      + idPersona + "/" + idCiucad, personaEdit);
  }

  crearPersona(nuevaPersona : About, idCiudad : number) : Observable<any> {
    return this.myHttpClient.post<any>(this.urlApi + "/personas/crear/" + 
    idCiudad, nuevaPersona);
  }

  eliminarPersona(idPersona : number) : Observable<any> {
    return this.myHttpClient.delete<any>(this.urlApi + 
      "/personas/eliminar/" + idPersona);
  }

  // Datos Educacion

  crearEducacion(nuevaEducacion : Educacion, 
                 idPersona : number, 
                 idCiudad : number) : Observable<any> {

    return this.myHttpClient.post<any>(this.urlApi + "/educacion/crear/" 
                                  + idPersona + "/" + idCiudad, nuevaEducacion);
  }

  modificarEducacion(idEducacionEdit : number,
                     idCiudad : number, 
                     educacionEdit : Educacion,) : Observable<any> {
    return this.myHttpClient.put<any>(this.urlApi + "/educacion/modificar/" + 
                      idEducacionEdit + "/" + idCiudad, educacionEdit);
  }

  eliminarEducacion(idEducacionDelete : number) : Observable<any> {
    return this.myHttpClient.delete<any>(this.urlApi + "/educacion/eliminar/" + 
                                                idEducacionDelete);
  }

  // Datos Trabajos

  crearTrabajo(nuevoTrabajo : Trabajo, 
               idPersona : number, 
               idCiudad : number) : Observable<any> {
    return this.myHttpClient.post<any>(this.urlApi + "/trabajos/crear/" 
                                  + idPersona + "/" + idCiudad, nuevoTrabajo);
  }

  modificarTrabajo(idTrabajoEdit : number, 
                  idCiudad : number, 
                  trabajoEdit : Trabajo) : Observable<any> {
    return this.myHttpClient.put<any>(this.urlApi + "/trabajos/modificar/" 
                                 + idTrabajoEdit + "/" + idCiudad, trabajoEdit);
  }

  eliminarTrabajo(idTrabajoDelete : number) : Observable<any> {
    return this.myHttpClient.delete<any>(this.urlApi + "/trabajos/eliminar/"
                                          + idTrabajoDelete);
  }

  // Datos Aptitudes

  crearAptitud(idPersona : number, aptitudNueva : Aptitud) : Observable<any> {
    return this.myHttpClient.post<any>(this.urlApi + "/aptitudes/crear/" 
                                      + idPersona, aptitudNueva);    
  }

  modificarAtitud(idAptitudEdit : number, aptitudEdit : Aptitud) : Observable<any> {
    return this.myHttpClient.put<any>(this.urlApi + "/aptitudes/modificar/" 
                                    + idAptitudEdit, aptitudEdit);
  }

  eliminarAptitud(idParaEliminar : number) : Observable<any> {
    return this.myHttpClient.delete<any>(this.urlApi + "/aptitudes/eliminar/" 
                                                 + idParaEliminar);
  }

  // Datos Proyectos

  modificarProyecto(id : number, proyectoEdit : Proyecto) : Observable<any> {
    return this.myHttpClient.put<any>(this.urlApi 
                    + "/proyectos/modificar/" + id, proyectoEdit);
  }


  crearNuevoProyecto( idPersona : number, proyectoNuevo : Proyecto) : Observable<any> {
    return this.myHttpClient.post<any>(this.urlApi + "/proyectos/crear/" + 
                                                       idPersona, proyectoNuevo);
  }

  eliminarProyecto(idParaEliminar : number) : Observable<any> {
    return this.myHttpClient.delete<any>(this.urlApi + "/proyectos/eliminar/" + 
                                         idParaEliminar);
  }
  

}
