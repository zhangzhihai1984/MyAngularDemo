import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { SharedModule } from 'src/app/shared';
import { RouterComponent } from './router/router.component';


@NgModule({
  declarations: [RouterComponent],
  imports: [
    SharedModule,
    RouterRoutingModule
  ]
})
export class RouterModule { }
