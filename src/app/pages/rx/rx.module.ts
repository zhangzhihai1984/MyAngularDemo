import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxRoutingModule } from './rx-routing.module';
import { RxListComponent } from './rx-list/rx-list.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [RxListComponent],
  imports: [
    CommonModule,
    RxRoutingModule,
    SharedModule
  ]
})
export class RxModule { }
