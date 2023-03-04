export class Educacion {

    nombreInstitucion: String;
    estudioCursado: String;
    anioInicio: number;
    anioFin: number;
    descripcionCurso: String;
    seTerminoCurso: number;
    
    constructor(nombreInstitucion: String,
        estudioCursado: String,
        anioInicio: number,
        anioFin: number,
        descripcionCurso: String,
        seTerminoCurso: number) {

        this.nombreInstitucion = nombreInstitucion;
        this.estudioCursado = estudioCursado;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.descripcionCurso = descripcionCurso;
        this.seTerminoCurso = seTerminoCurso;

    }

}