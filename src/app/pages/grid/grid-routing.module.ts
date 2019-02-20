import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';

const routes: Routes = [
  {
    path: '',
    component: GridListComponent,
    data: { animState: 'GridPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
