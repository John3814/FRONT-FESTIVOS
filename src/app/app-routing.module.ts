import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechaComponent } from './componentes/fecha/fecha.component';
import { ObtenerFestivosComponent } from './componentes/obtener-festivos/obtener-festivos.component';

const routes: Routes = [
  { path: '', redirectTo: '/festivos/verificar', pathMatch: 'full'},
  { path: 'festivos/verificar', component: FechaComponent},
  { path: 'festivos/obtener-festivos', component: ObtenerFestivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
