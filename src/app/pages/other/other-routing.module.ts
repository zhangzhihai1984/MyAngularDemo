import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: ':id',
    component: OtherComponent
  },
  {
    path: ':id/:id2',
    component: OtherComponent
  },
  {
    path: '',
    redirectTo: '100',
    data: {
      animState: 'OtherPage',
      key: 'value'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
