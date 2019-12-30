import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    component: OtherComponent,
    data: { animState: 'OtherPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
