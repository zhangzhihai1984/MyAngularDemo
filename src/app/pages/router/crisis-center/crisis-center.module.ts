import { NgModule } from '@angular/core';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [CrisisCenterComponent],
  imports: [
    SharedModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
