import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmlpeadoSonComponent } from './emlpeado-son/emlpeado-son.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { ProycetsComponent } from './proycets/proycets.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule,Route } from '@angular/router';
import { UpdateEmployComponent } from './update-employ/update-employ.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './logout/logout.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginProtection } from './login/login-protection';


const appRoutes:Route[] = [

  {path:'home', component:HomeComponent},
  {path:'proyects', component:ProycetsComponent , canActivate:[LoginProtection]},
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'update/:id', component:UpdateEmployComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'**', component:ErrorComponent}//muy importante que el path a pagina de error este de ultimo


];

@NgModule({
  declarations: [
    AppComponent,
    EmlpeadoSonComponent,
    CaracteristicasComponent,
    HomeComponent,
    ProycetsComponent,
    AboutComponent,
    ContactsComponent,
    UpdateEmployComponent,
    ErrorComponent,
    LoginComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ServicioEmpleadoService,EmpleadosService,DataServices,LoginService,CookieService,LoginProtection],
  bootstrap: [AppComponent]
})
export class AppModule { }
