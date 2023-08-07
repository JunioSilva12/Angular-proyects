export class Empleado {

 nombre:string="";
 apellido:string="";
 cargo:string="";
 salario:number=0;
 caracteristicas:string[];

 constructor( nombre:string , apellido:string , cargo:string , salario:number, caracteristicas:string[]){
  this.nombre=nombre;
  this.apellido=apellido;
  this.cargo=cargo;
  this.salario=salario;
  this.caracteristicas=caracteristicas;

 }

setCaracteristica(caract:string ){
  this.caracteristicas.push(caract);
}

getCaract(){
  return this.caracteristicas[0]
}


}
