import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KonvaListComponent } from './konva-list/konva-list.component';

const routes: Routes = [
  {
    path: '',
    component: KonvaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KonvaRoutingModule { }
