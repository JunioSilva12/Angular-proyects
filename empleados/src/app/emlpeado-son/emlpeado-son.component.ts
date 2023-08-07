import { Component, Input,OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-emlpeado-son',
  templateUrl: './emlpeado-son.component.html',
  styleUrls: []
})
export class EmlpeadoSonComponent implements OnInit {


  @Input () empleadosDeLista:Empleado[];
  arrayCaracteristicas: string[]=[];
  idSelected:string;
  newCaract:string;
  constructor( private employService:EmpleadosService){

  }
   loaded:boolean=true;
ngOnInit(){

addEventListener("load",()=>{
/*
if (this.loaded) {
  (<HTMLInputElement>document.querySelector('input[name="selected"]')).checked = true;
  this.idSelected=<string>this.selectFisrtElement();
  this.loaded=false;
}
this.loaded=false;*/
//this.selectFisrtElement();
})  ;

}

delEmploy(){
  console.log("este del:"+this.idSelected)
  if (!this.idSelected) return;

  let myEmpleado:Empleado=this.employService.getEmployById(parseInt(this.idSelected))
  let msg=`         Información del Emplaado a eliminar
Nombre :${myEmpleado.nombre}
Apellido: ${myEmpleado.apellido}
Cargo: ${myEmpleado.cargo}
Salario: ${myEmpleado.salario} `;
  this.employService.deleteEmploy(parseInt(this.idSelected),"msg");
  //console.log(this.employService.getEmploies());

}

selectFisrtElement(){
  const botones = document.querySelectorAll('input[name="selected"]');
console.log(botones)
    // Establecer el primer botón de radio como seleccionado por defecto
    if (botones.length > 0) {
      (<HTMLInputElement>botones[0]).checked = true;

    }
   // (<HTMLInputElement>botones[0]).checked = true;

    //this.idSelected=<string>(<HTMLInputElement>botones[0]).getAttribute('id');
    console.log( "is id"+this.idSelected)
    console.log("el id:"+(<HTMLInputElement>botones[0]).getAttribute('id'));
    return (<HTMLInputElement>botones[0]).getAttribute('id');

}
  setSelected(event:any){

    this.idSelected=event.target.getAttribute('id');
    console.log(this.idSelected);

  }


  addCaraterristica(newItem: string) {


 if( !this.empleadosDeLista[parseInt(this.idSelected)].caracteristicas){
  this.empleadosDeLista[parseInt(this.idSelected)].caracteristicas=[newItem];
 }else{
  this.empleadosDeLista[parseInt(this.idSelected)].caracteristicas.push(newItem);
 }

  console.log( this.empleadosDeLista)
    this.arrayCaracteristicas.push(newItem);
    this.employService.saveEmploies( this.empleadosDeLista);
  }


}
