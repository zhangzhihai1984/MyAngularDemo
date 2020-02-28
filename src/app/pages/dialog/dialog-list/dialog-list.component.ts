import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take, filter } from 'rxjs/operators';

import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Dialog3Component } from '../dialog3/dialog3.component';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit {
  name: string;

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog1() {
    this.dialog.open(Dialog1Component);
  }

  openDialog2() {
    this.dialog.open(Dialog2Component);
  }

  openDialog3() {
    const dialogRef = this.dialog.open(Dialog3Component, {
      width: '50%',
      data: {
        name: this.name
      }
    });
    dialogRef.afterClosed()
      .pipe(take(1), filter(v => v))
      .subscribe(result => {
        this.name = result;
      });
  }
}
