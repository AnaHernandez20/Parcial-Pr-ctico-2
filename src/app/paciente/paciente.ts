import { Historial } from "../historial/historial";

export class Paciente {
    //Super importante que estos atributos estén tal cual como en el json, sino no va a funcionar!!!
    //Esto es porque Angular intentará mapear los campos del JSON a las propiedades de la clase Serie, tiene que saber que son equivalentes o algo
    nombre: string;
    edad: number;
    diagnostico: string;
    historial: Historial[];
    

    public constructor(nombre:string,edad: number, diagnostico: string,
        historial: Historial[]){
   
    //Usaré el this para cuando se instancie ;)
    this.nombre = nombre;
    this.edad = edad;
    this.diagnostico = diagnostico;
    this.historial = historial;
        }

}
