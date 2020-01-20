import { NgModule } from '@angular/core';

import { RouterRoutingModule } from './router-routing.module';
import { SharedModule } from 'src/app/shared';
import { RouterComponent } from './router.component';


@NgModule({
  declarations: [RouterComponent],
  imports: [
    SharedModule,
    RouterRoutingModule
  ]
})
export class RouterModule { }
