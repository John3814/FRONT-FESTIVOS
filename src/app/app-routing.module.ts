import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechaComponent } from './componentes/fecha/fecha.component';

const routes: Routes = [
  { path: '', component: FechaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
