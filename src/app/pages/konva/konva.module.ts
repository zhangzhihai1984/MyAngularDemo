import { NgModule } from '@angular/core';

import { KonvaRoutingModule } from './konva-routing.module';
import { Konva1Component } from './konva1/konva1.component';
import { SharedModule } from 'src/app/shared';
import { KonvaListComponent } from './konva-list/konva-list.component';
import { KonvaScrollingComponent } from './konva-scrolling/konva-scrolling.component';

@NgModule({
  declarations: [
    KonvaListComponent,
    Konva1Component,
    KonvaScrollingComponent
  ],
  imports: [
    SharedModule,
    KonvaRoutingModule
  ]
})
export class KonvaModule { }