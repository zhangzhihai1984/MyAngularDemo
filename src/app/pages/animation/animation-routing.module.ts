import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationListComponent } from './animation-list/animation-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationRoutingModule { }
