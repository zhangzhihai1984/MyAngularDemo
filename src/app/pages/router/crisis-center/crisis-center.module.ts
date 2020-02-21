import { NgModule } from '@angular/core';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center';
import { SharedModule } from 'src/app/shared';
import { CrisisListComponent } from './crisis-list';
import { CrisisDetailComponent } from './crisis-detail';
import { CrisisDefaultComponent } from './crisis-default';


@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisDefaultComponent
  ],
  imports: [
    SharedModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
