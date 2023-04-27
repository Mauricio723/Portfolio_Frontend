export class Proyecto {
        
    nombre : String;
    descripcion : String;
    fechaPublicacion : String;
    persona_id : number;
    
    constructor(nombre : String, descripcion : String, 
                fechaPublicacion : String, persona_id : number) {
        
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaPublicacion = fechaPublicacion;
        this.persona_id = persona_id;

    }
}