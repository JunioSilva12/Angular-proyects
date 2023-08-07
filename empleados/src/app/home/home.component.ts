import { Component, OnInit  } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private employService:EmpleadosService , private cookie:CookieService){

    //this.empleados=employService.getEmploies();

  }

  ngOnInit():void{
   //  this.empleados=this.employService.getEmploies();

   if(!(this.cookie.get("token")==undefined || this.cookie.get("token")=="")) {
      console.log("tiene auth")
      this.employService.getEmploiesData().subscribe(
      (res)=>{ console.log(res);
      this.empleados=<Empleado[]>res;//SIUUUU recibe los datos de la base se datos
      }
     );
   }
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

}


}
