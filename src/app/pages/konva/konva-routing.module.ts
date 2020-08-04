import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Konva1Component } from './konva1/konva1.component';

const routes: Routes = [
  {
    path: '',
    component: Konva1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KonvaRoutingModule { }
