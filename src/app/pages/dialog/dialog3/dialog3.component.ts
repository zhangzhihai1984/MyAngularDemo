import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog3',
  templateUrl: './dialog3.component.html',
  styleUrls: ['./dialog3.component.scss']
})
export class Dialog3Component implements OnInit {

  name: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { name: string },
    readonly dialogRef: MatDialogRef<Dialog3Component>
  ) {
    this.name = data.name;
  }

  ngOnInit() {
  }

  @HostListener('keyup.enter')
  confirm() {
    this.dialogRef.close(this.name);
  }
}
