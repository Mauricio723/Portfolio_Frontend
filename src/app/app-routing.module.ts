import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormloginComponent } from './componentes/formlogin/formlogin.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';

const routes: Routes = [
  {path: "login", component: FormloginComponent},
  {path: "secciones", component: SeccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
