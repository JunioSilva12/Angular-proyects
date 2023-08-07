import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: []
})
export class CaracteristicasComponent {

  constructor(private myService:ServicioEmpleadoService){}

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEvent = new EventEmitter<string>();

  @Input () listaCaracteristicas:string[];

  newC:string;

  addCaraterristica(value: string) {
    let msg=`nueva caracteristica: ${value}`;
    this.myService.showMessage(msg);
    this.newItemEvent.emit(this.newC);//IMPORTANTE para que se actualize se emite el ngModel
    this.listaCaracteristicas.push(this.newC);
  }

}
