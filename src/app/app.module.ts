import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducationComponent } from './componentes/education/education.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormloginComponent } from './componentes/formlogin/formlogin.component';
import { BodyPfComponent } from './componentes/body-pf/body-pf.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';

import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    TrabajosComponent,
    AptitudesComponent,
    ProyectosComponent,
    FooterComponent,
    FormloginComponent,
    BodyPfComponent,
    SeccionesComponent
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
