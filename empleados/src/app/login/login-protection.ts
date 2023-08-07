import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginProtection implements CanActivate {


  constructor(private router:Router , private logiServise:LoginService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.logiServise.isLogged()) return true;
    else this.router.navigate(["login"]);return false;
  }


}
