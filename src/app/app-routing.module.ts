import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FnewuserComponent } from './componentes/fnewuser/fnewuser.component';
import { FormloginComponent } from './componentes/formlogin/formlogin.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { ProtexGuard } from './servicios/protex.guard';
import { IniciopfComponent } from './componentes/iniciopf/iniciopf.component';

const routes: Routes = [
  {path: "inicio", component: IniciopfComponent},
  {path: "login", component: FormloginComponent},
  {path: "nuevo", component: FnewuserComponent},
  {path: "secciones", component: SeccionesComponent, canActivate: [ProtexGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
