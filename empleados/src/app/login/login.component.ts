import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title="INICIO DE SESIÓN";
  //email:string="";
  //password:string="";
  constructor(private logiServise:LoginService) { }


  loginUser(form:NgForm){

const email = form.value.email;
const password = form.value.password;
console.log(email+"..."+password);
this.logiServise.login(email,password);

  }
}
// npm install ngx-cookie-service --save
