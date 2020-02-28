import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [DialogComponent],
})
export class DialogModule { }
