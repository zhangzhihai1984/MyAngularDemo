import { NgModule } from '@angular/core';

import { KonvaRoutingModule } from './konva-routing.module';
import { SharedModule } from 'src/app/shared';
import { KonvaListComponent } from './konva-list/konva-list.component';
import { KonvaScrollingComponent } from './konva-scrolling/konva-scrolling.component';

@NgModule({
  declarations: [
    KonvaListComponent,
    KonvaScrollingComponent
  ],
  imports: [
    SharedModule,
    KonvaRoutingModule
  ]
})
export class KonvaModule { }