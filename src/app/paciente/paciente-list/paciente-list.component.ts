import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes: Array<Paciente> = [];

 //Var para contar mis pacientes menorss de edad
  cantidadMenores: number = 0;

  constructor(private pacienteService: PacienteService) { }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.pacientes = pacientes;

      this.calcularMenores();
    });
  }

  calcularMenores(){

    for (let paciente of this.pacientes) {
      if (paciente.edad < 18) {
        this.cantidadMenores += 1;
      }
    }
    
  }


  ngOnInit() {
    this.getPacientes();
  }

}
