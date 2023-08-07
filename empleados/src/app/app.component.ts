import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title="inicio"


constructor(private router:Router , private logiServise:LoginService){

}

ngOnInit(){
  firebase.initializeApp({
    apiKey: "",
    authDomain: "mis-usuarios-2c963.firebaseapp.com",
  })
if (window.location.pathname=="/" || window.location.pathname=="") {
  this.router.navigate(['home']);
}
}

goRouter(root:string){
  this.router.navigate([root]);
}

isLogged(){
  return this.logiServise.isLogged() ;
}

logout(){
  this.logiServise.logout();
  //location.reload(); //esta madre no me dejaba hacer el logout
}

}
