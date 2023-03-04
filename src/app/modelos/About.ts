
export class About {
        
    nombre : String;
    apellido : String;
    ocupacion : String;
    tituloPrincipal : String;
    fecha_nacimiento : String;
    documento : String;
    email : String;
    acerca_de : String;
    urlFoto : String;
    urlBanner : String;

    constructor(nombre : String, apellido : String, ocupacion : String, 
                tituloPrincipal : String, fecha_nacimiento : String, 
                documento : String, email : String, acerca_de : String, 
                urlFoto : String, urlBanner : String) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
        this.tituloPrincipal = tituloPrincipal;
        this.fecha_nacimiento = fecha_nacimiento;
        this.documento = documento;
        this.email = email;
        this.acerca_de = acerca_de;
        this.urlFoto = urlFoto;
        this.urlBanner = urlBanner;       

    }
    
}