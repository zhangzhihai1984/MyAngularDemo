import { NgModule } from '@angular/core';

import { KonvaRoutingModule } from './konva-routing.module';
import { Konva1Component } from './konva1/konva1.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [Konva1Component],
  imports: [
    SharedModule,
    KonvaRoutingModule
  ]
})
export class KonvaModule { }