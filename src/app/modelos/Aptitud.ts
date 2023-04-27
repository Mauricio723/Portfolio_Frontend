export class Aptitud {

    nombre : String;
    descripcion : String;
    porcentaje : number;
    persona_id : number;

    constructor(nombre : String, descripcion : String, 
                porcentaje : number, persona_id : number) {

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.porcentaje = porcentaje;
        this.persona_id = persona_id;

    }

}