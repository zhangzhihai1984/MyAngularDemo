import { NgModule } from '@angular/core';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AnimationListComponent],
  imports: [
    SharedModule,
    AnimationRoutingModule
  ]
})
export class AnimationModule { }
