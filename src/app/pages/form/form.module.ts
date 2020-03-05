import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
