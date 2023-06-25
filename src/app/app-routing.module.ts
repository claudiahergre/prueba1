import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannerComponent } from './components/planner/planner.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/planner' },
  { path: 'planner', component: PlannerComponent },
  { path: 'nuevo', component: FormularioComponent },
  { path: '**', redirectTo: '//planner' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
