import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { take, map } from 'rxjs/operators';

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
      map(v => {
        if (v)
          return true
        return false
      })
    )
  }
}
