import { NgModule } from '@angular/core';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { SharedModule } from 'src/app/shared';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';


@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent
  ],
  imports: [
    SharedModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
