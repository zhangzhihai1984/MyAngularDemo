import { NgModule } from '@angular/core';

import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other/other.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { SharedModule } from 'src/app/shared';
import { MyIf2Directive } from './directives/my-if2.directive';

@NgModule({
  declarations: [OtherComponent, HighlightDirective, MyIfDirective, MyIf2Directive],
  imports: [
    SharedModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
