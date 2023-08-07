import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() { }


  showMessage(message:string){
 alert(message);
  }
}
