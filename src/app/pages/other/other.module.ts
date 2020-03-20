import { NgModule } from '@angular/core';

import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other/other.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { SharedModule } from 'src/app/shared';
import { MyIf2Directive } from './directives/my-if2.directive';
import { InjectionComponent } from './injection/injection.component';
import { InjectionDirective } from './injection/injection.directive';

@NgModule({
  declarations: [
    OtherComponent,
    HighlightDirective,
    MyIfDirective,
    MyIf2Directive,
    InjectionComponent,
    InjectionDirective
  ],
  imports: [
    SharedModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
