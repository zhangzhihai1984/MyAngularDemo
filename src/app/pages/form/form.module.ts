import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SharedModule } from 'src/app/shared';
import { MaterialFormComponent } from './material-form/material-form.component';
import { FormCenterComponent } from './form-center/form-center.component';


@NgModule({
  declarations: [
    FormCenterComponent,
    MaterialFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    SharedModule,
    FormRoutingModule
  ]
})
export class FormModule { }
