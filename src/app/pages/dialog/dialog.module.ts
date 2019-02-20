import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogListComponent } from './dialog-list/dialog-list.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    DialogListComponent
  ],
  imports: [
    SharedModule,
    DialogRoutingModule
  ]
})
export class DialogModule { }
