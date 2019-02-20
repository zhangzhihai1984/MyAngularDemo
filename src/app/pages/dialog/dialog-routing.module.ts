import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogListComponent } from './dialog-list/dialog-list.component';

const routes: Routes = [
  {
    path: '',
    component: DialogListComponent,
    data: { animState: 'DialogPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogRoutingModule { }
