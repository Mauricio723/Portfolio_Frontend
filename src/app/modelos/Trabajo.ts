export class Trabajo {

    nombreEmpresa: String;
    puestoLaboral: String;
    anioInicio: number;
    anioFin: number;
    descripcion: String;
    persona_id: number;

    constructor(nombreEmpresa: String,
        puestoLaboral: String,
        anioInicio: number,
        anioFin: number,
        descripcion: String,
        persona_id: number) {

        this.nombreEmpresa = nombreEmpresa;
        this.puestoLaboral = puestoLaboral;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.descripcion = descripcion;
        this.persona_id = persona_id;

    }
    
}