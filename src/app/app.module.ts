import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { HeaderComponent } from './componentes/header/header.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { EducationComponent } from './componentes/education/education.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormloginComponent } from './componentes/formlogin/formlogin.component';
import { BodyPfComponent } from './componentes/body-pf/body-pf.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';

import { InterceptorService } from './servicios/interceptor.service';
import { FnewuserComponent } from './componentes/fnewuser/fnewuser.component';
import { CiudadesComponent } from './componentes/ciudades/ciudades.component';
import { IniciopfComponent } from './componentes/iniciopf/iniciopf.component';
import { NuevaperComponent } from './componentes/persona/nuevaper/nuevaper.component';
import { EditperComponent } from './componentes/persona/editper/editper.component';
import { SeccionuserComponent } from './componentes/seccionuser/seccionuser.component';
import { ConfigUserComponent } from './componentes/config-user/config-user.component';
import { DocbaseComponent } from './version02/docbase/docbase.component';
import { Home02Component } from './version02/home02/home02.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonaComponent,
    EducationComponent,
    TrabajosComponent,
    AptitudesComponent,
    ProyectosComponent,
    FooterComponent,
    FormloginComponent,
    BodyPfComponent,
    SeccionesComponent,
    FnewuserComponent,
    CiudadesComponent,
    IniciopfComponent,
    NuevaperComponent,
    EditperComponent,
    SeccionuserComponent,
    ConfigUserComponent,
    DocbaseComponent,
    Home02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService,
   {provide : HTTP_INTERCEPTORS, useClass : InterceptorService, multi : true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
