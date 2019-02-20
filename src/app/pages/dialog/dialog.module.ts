import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogListComponent } from './dialog-list/dialog-list.component';
import { SharedModule } from 'src/app/shared';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';

@NgModule({
  declarations: [
    DialogListComponent,
    Dialog1Component,
    Dialog2Component
  ],
  imports: [
    SharedModule,
    DialogRoutingModule
  ],
  entryComponents: [
    Dialog1Component,
    Dialog2Component
  ]
})
export class DialogModule { }
