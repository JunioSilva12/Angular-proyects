import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-employ',
  templateUrl: './update-employ.component.html',
  styleUrls: ['./update-employ.component.css']
})
export class UpdateEmployComponent  implements OnInit{
  constructor(private router:Router ,private employService:EmpleadosService, private route:ActivatedRoute){
    //this.empleados=employService.getEmploies();
  }

title = 'Listado de empleados';

//empleados:Empleado[];

idToUpdate:number;
uEmploy:Empleado;
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
accion:number;

ngOnInit(){
 this.accion=parseInt(this.route.snapshot.queryParams['action']);//adquiere el valor que viaja en la url
 this.idToUpdate=this.route.snapshot.params['id'];
 this.uEmploy=this.employService.getEmployById(this.idToUpdate);
 console.log(this.uEmploy);
 this.cuadroNombre=this.uEmploy.nombre;
 this.cuadroApellido=this.uEmploy.apellido;
 this.cuadroCargo=this.uEmploy.cargo;
 this.cuadroSalario=this.uEmploy.salario;
 this.setButtom();

console.log("..."+this.cuadroNombre+"..."+this.cuadroApellido+"..."+this.cuadroCargo+"..."+this.cuadroSalario+"...")

}


updateEmploy(){

  let myEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario , []) ;

let msg=`         Información del Emplaado a actualizar
Nombre :${myEmpleado.nombre}
Apellido: ${myEmpleado.apellido}
Cargo: ${myEmpleado.cargo}
Salario: ${myEmpleado.salario} `;

this.employService.updateEmploy(myEmpleado,msg ,this.idToUpdate);
//this.router.navigate(['home']);

}

setButtom(){
 let boton:HTMLInputElement=<HTMLInputElement>document.querySelector("#btn");
 console.log(boton.value);
 console.log( this.accion);
  if ( this.accion==1){
    boton.value="Eliminar Empleado"
    console.log(boton.value);
  };
  if ( this.accion==2){ boton.value="Actualizar Empleado"};


}

actionEmploy(){
if ( this.accion==1) {
this.delEmploy();
}
if ( this.accion==2) {
this.updateEmploy();
}
}

delEmploy(){
  console.log("este del:"+this.idToUpdate)
  if (!this.idToUpdate) return;

  let myEmpleado:Empleado=this.employService.getEmployById(this.idToUpdate);
  let msg=`         Información del Emplaado a eliminar
Nombre :${myEmpleado.nombre}
Apellido: ${myEmpleado.apellido}
Cargo: ${myEmpleado.cargo}
Salario: ${myEmpleado.salario} `;
  this.employService.deleteEmploy(this.idToUpdate,msg);
 // this.router.navigate(['home']);
  //console.log(this.employService.getEmploies());
}

}
