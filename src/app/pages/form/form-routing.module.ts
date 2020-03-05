import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormCenterComponent } from './form-center/form-center.component';
import { MaterialFormComponent } from './material-form/material-form.component';


const routes: Routes = [
  {
    path: '',
    component: FormCenterComponent,
    children: [
      {
        path: '',
        redirectTo: 'material',
        pathMatch: 'full'
      },
      {
        path: 'material',
        component: MaterialFormComponent
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
