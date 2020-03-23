import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiRoutingModule } from './di-routing.module';
import { DIComponent } from './di.component';
import { DIDirective } from './di.directive';
import { Dep } from './di';


@NgModule({
  declarations: [DIComponent, DIDirective],
  imports: [
    CommonModule,
    DiRoutingModule
  ],
  providers: [Dep]
})
export class DIModule { }
