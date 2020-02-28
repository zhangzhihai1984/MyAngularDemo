import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { take, map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  confirm(msg?: string): Observable<boolean> {
    return this.dialog.open(DialogComponent, {
      disableClose: true,
      minWidth: '30%',
      data: { title: msg || 'Is it OK?' }
    }).afterClosed().pipe(
      take(1),
      // delay(2000),
      map(v => v ? true : false)
    )
  }
}
