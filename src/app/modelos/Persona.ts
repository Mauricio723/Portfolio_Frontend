
export class Persona {
        
    nombre : String;
    apellido : String;
    ocupacion : String;
    tituloPrincipal : String;
    fechaNacimiento : String;    
    email : String;
    acercaDe : String;
    urlFoto : String;
    urlBanner : String;

    constructor(nombre : String, apellido : String, ocupacion : String, 
                tituloPrincipal : String, fechaNacimiento : String, 
                email : String, acercaDe : String, urlFoto : String, 
                urlBanner : String) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
        this.tituloPrincipal = tituloPrincipal;
        this.fechaNacimiento = fechaNacimiento;        
        this.email = email;
        this.acercaDe = acercaDe;
        this.urlFoto = urlFoto;
        this.urlBanner = urlBanner;       

    }
    
}