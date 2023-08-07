import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Empleado[] = [];
 /* empleados:Empleado[] = [
    new Empleado("Juan", "Pérez", "Desarrollador", 40000, ["mentor"]) ,
    new Empleado("María", "Gómez", "Diseñador", 35000,["senior"]),
    new Empleado("Carlos", "López", "Gerente de Proyectos", 50000,[]),
    new Empleado("Laura", "Martínez", "Analista de Datos", 42000,[]),
    new Empleado("Pedro", "Ramírez", "Marketing", 38000,[]),
     ];*/

  constructor(private servicioVentana:ServicioEmpleadoService , private dataService:DataServices) {

  }

addEmploy(myEmpleado:Empleado,message:string){

  this.servicioVentana.showMessage(message);
  this.empleados.push(myEmpleado);
   console.log(this.empleados);
  this.dataService.saveEmploies(this.empleados);
  //location.reload();

}

saveEmploies(list:Empleado[]){
  console.log(list);
  this.dataService.saveEmploies(list);
}

getEmploiesData(){
  this.dataService.loadEmploies().subscribe(
    (res)=>{ console.log(res);
    this.empleados=<Empleado[]>res;//SIUUUU recibe los datos de la base se datos
    }
   )
  return this.dataService.loadEmploies(); //retorna un observador
}

getEmploies(){
  return this.empleados;
}
getEmployById(id:number){
  return this.empleados[id]
}

updateEmploy(myEmpleado:Empleado,message:string,id:number){

  this.servicioVentana.showMessage(message);
  this.empleados[id]=myEmpleado;
  this.dataService.updateEmploies(myEmpleado,id);
}

deleteEmploy(id:number,message:string){

  this.servicioVentana.showMessage(message);
 this.empleados.splice(id,1);
 this.dataService.delEmploy(id);
 if (this.empleados!=null) this.dataService.saveEmploies(this.empleados);

}


}
