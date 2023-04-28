import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Screen3Component } from './Screen3/screen3.component';
import { Screen2Component } from './Screen2/screen2.component';
import { Screen1Component } from './Screen1/screen1.component';
const routes: Routes = [
  { path: 'Inicio', component: Screen1Component },
  { path: 'Enviardata', component: Screen2Component },
  { path: 'Preciocasa', component: Screen3Component },
  { path: '', component: Screen1Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
