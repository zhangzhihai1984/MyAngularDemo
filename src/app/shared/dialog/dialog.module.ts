import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [DialogComponent],
})
export class DialogModule { }
