import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title: string

  constructor(@Inject(MAT_DIALOG_DATA) data: { title: string }) {
    this.title = data.title
  }

  ngOnInit() {
  }

}
