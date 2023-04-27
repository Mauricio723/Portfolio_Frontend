export class Educacion {

    nombreInstitucion: String;
    estudioCursado: String;
    anioInicio: number;
    anioFin: number;
    descripcionCurso: String;
    seTerminoCurso: number;
    persona_id: number;
    
    constructor(nombreInstitucion: String,
        estudioCursado: String,
        anioInicio: number,
        anioFin: number,
        descripcionCurso: String,
        seTerminoCurso: number,
        persona_id: number) {

        this.nombreInstitucion = nombreInstitucion;
        this.estudioCursado = estudioCursado;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.descripcionCurso = descripcionCurso;
        this.seTerminoCurso = seTerminoCurso;
        this.persona_id = persona_id;

    }

}