import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    MatDialogModule
  ],
  entryComponents: [DialogComponent],
})
export class DialogModule { }
