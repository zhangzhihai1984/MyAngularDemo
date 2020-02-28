import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, timeInterval, map, skip, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

const EXIT_DURATION = 500;

@Component({
  selector: 'app-rx-exit',
  templateUrl: './rx-exit.component.html',
  styleUrls: ['./rx-exit.component.scss', '../rx-list/rx-list.component.scss']
})
export class RxExitComponent implements OnInit {

  @Input() stopSubject: Subject<any>;
  @Output() logAdded = new EventEmitter<any>();

  @ViewChild('exitRef', { read: ElementRef, static: false }) exitRef: ElementRef;

  activated = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  activate() {
    this.activated = true;

    const interval$ = fromEvent(this.exitRef.nativeElement, 'click').pipe(
      timeInterval(),
      map(v => v.interval)
    )

    const exit$ = interval$.pipe(
      skip(1),
      filter(v => v < EXIT_DURATION)
    )

    interval$.pipe(
      takeUntil(exit$)
    ).subscribe(
      v => {
        this.snackBar.open('click once more to exit', null, { duration: 1000 })
        this.logAdded.emit(`${v}ms`)
      },
      () => { },
      () => {
        this.activated = false
        this.logAdded.emit('Exit!!!')
      }
    )
  }
}
