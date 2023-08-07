
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})

export class DataServices{

 constructor(private httpClient:HttpClient , private logiServise:LoginService){}


saveEmploies(empleados:Empleado[]){
  const token:string = this.logiServise.getIdToken();
this.httpClient.put('https://mis-usuarios-2c963-default-rtdb.firebaseio.com/datos.json?auth='+token,empleados).subscribe(
(response)=>{console.log("se guardo los datos"+response);this.goToHome();},
(error)=>console.log("se hizo un error"+error)
);
}

updateEmploies(empleado:Empleado,id:number){
  const token:string = this.logiServise.getIdToken();
 let url:string='https://mis-usuarios-2c963-default-rtdb.firebaseio.com/datos/'+id+'.json?auth='+token;
  this.httpClient.put(url,empleado).subscribe(
  (response)=>{console.log("se modificó los datos"+response);this.goToHome();},
  (error)=>console.log("se hizo un error"+error)
  );
  }

  delEmploy(id:number){
    const token:string = this.logiServise.getIdToken();
    let url:string='https://mis-usuarios-2c963-default-rtdb.firebaseio.com/datos/'+id+'.json?auth='+token;
    this.httpClient.delete(url).subscribe(
    (response)=>{console.log("se eliminó los datos"+response);},
    (error)=>console.log("se hizo un error"+error)
    );
  }


 goToHome() {
  location.href="/home";
 }


loadEmploies(){

 // let empleados:Empleado[] =[];


 const token:string = this.logiServise.getIdToken();
  return this.httpClient.get('https://mis-usuarios-2c963-default-rtdb.firebaseio.com/datos.json?auth='+token);


}
}
