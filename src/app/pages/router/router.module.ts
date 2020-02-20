import { NgModule } from '@angular/core';

import { RouterRoutingModule } from './router-routing.module';
import { SharedModule } from 'src/app/shared';
import { RouterComponent } from './router.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';


@NgModule({
  declarations: [RouterComponent, ComposeMessageComponent],
  imports: [
    SharedModule,
    RouterRoutingModule
  ]
})
export class RouterModule { }
