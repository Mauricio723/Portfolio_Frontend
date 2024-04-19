import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FnewuserComponent } from './componentes/fnewuser/fnewuser.component';
import { FormloginComponent } from './componentes/formlogin/formlogin.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { ProtexGuard } from './servicios/protex.guard';
//import { IniciopfComponent } from './componentes/iniciopf/iniciopf.component';
import { EditperComponent } from './componentes/persona/editper/editper.component';
import { NuevaperComponent } from './componentes/persona/nuevaper/nuevaper.component';
import { SeccionuserComponent } from './componentes/seccionuser/seccionuser.component';
import { Home02Component } from './version02/home02/home02.component';

const routes: Routes = [
  //{path: "inicio", component: IniciopfComponent},
  {path: "home", component: Home02Component},
  {path: "login", component: FormloginComponent},
  {path: "nuevo", component: FnewuserComponent},
  {path: "secciones", component: SeccionesComponent, canActivate: [ProtexGuard]},
  {path: "seccionuser", component: SeccionuserComponent, canActivate: [ProtexGuard]},
  {path: "personaedit/:id", component: EditperComponent, canActivate: [ProtexGuard]},
  {path: "personanueva", component: NuevaperComponent, canActivate: [ProtexGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
