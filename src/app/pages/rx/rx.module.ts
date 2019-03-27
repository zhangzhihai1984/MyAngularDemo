import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxRoutingModule } from './rx-routing.module';
import { RxListComponent } from './rx-list/rx-list.component';
import { SharedModule } from 'src/app/shared';
import { RxSumComponent } from './rx-sum/rx-sum.component';
import { RxExitComponent } from './rx-exit/rx-exit.component';

@NgModule({
  declarations: [
    RxListComponent,
    RxSumComponent,
    RxExitComponent
  ],
  imports: [
    CommonModule,
    RxRoutingModule,
    SharedModule
  ]
})
export class RxModule { }
