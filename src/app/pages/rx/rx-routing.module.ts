import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxListComponent } from './rx-list/rx-list.component';

const routes: Routes = [
  {
    path: '',
    component: RxListComponent,
    data: { animState: 'RxPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxRoutingModule { }
