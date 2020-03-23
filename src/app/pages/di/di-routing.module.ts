import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DIComponent } from './di.component'


const routes: Routes = [
  {
    path: '',
    component: DIComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiRoutingModule { }
