import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { take } from 'rxjs/operators';
import { Dialog2Component } from '../dialog2/dialog2.component';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit {

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog1() {
    const dialogRef1 = this.dialog.open(Dialog1Component);
    //   dialogRef.afterClosed()
    //     .pipe(take(1))
    //     .subscribe(result => {
    //       console.log('Dialog', result);
    //     });
  }

  openDialog2() {
    const dialogRef2 = this.dialog.open(Dialog2Component);
  }

}
