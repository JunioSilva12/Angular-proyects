import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proycets',
  templateUrl: './proycets.component.html',
  styleUrls: ['./proycets.component.css']
})
export class ProycetsComponent {

  constructor(private router:Router ,private employService:EmpleadosService){
    this.empleados=employService.getEmploies();
  }

title = 'Listado de empleados';

empleados:Empleado[];


cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;


addEmployee(){

  let myEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario , []) ;

let msg=`         Información del Emplaado
Nombre :${myEmpleado.nombre}
Apellido: ${myEmpleado.apellido}
Cargo: ${myEmpleado.cargo}
Salario: ${myEmpleado.salario} `;

this.employService.addEmploy(myEmpleado,msg);
this.router.navigate(['home']);

}

}
