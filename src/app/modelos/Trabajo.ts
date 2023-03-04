export class Trabajo {

    nombreEmpresa: String;
    puestoLaboral: String;
    anioInicio: number;
    anioFin: number;
    descripcion: String;

    constructor(nombreEmpresa: String,
        puestoLaboral: String,
        anioInicio: number,
        anioFin: number,
        descripcion: String) {

        this.nombreEmpresa = nombreEmpresa;
        this.puestoLaboral = puestoLaboral;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.descripcion = descripcion;

    }
    
}