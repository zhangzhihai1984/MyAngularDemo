import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other/other.component';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [OtherComponent, HighlightDirective],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
