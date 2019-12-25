import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, timeInterval } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-rx-exit',
  templateUrl: './rx-exit.component.html',
  styleUrls: ['./rx-exit.component.scss', '../rx-list/rx-list.component.scss']
})
export class RxExitComponent implements OnInit {

  @Input() stopSubject: Subject<any>;
  @Output() logAdded = new EventEmitter<any>();

  @ViewChild('exit', { static: false }) exit: ElementRef;

  EXIT_DURATION = 500;
  activated = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  activate() {
    this.activated = true;

    fromEvent(this.exit.nativeElement, 'click').pipe(
      timeInterval(),
      takeUntil(this.stopSubject)
    ).subscribe(
      v => {
        if (v.interval > this.EXIT_DURATION) {
          this.logAdded.emit(`${v.interval}ms > 500ms`)
          this.snackBar.open('click once more to exit', null, { duration: 1000 })
        } else {
          this.logAdded.emit(`${v.interval}ms Exit!!!`)
        }
      },
      () => { },
      () => this.activated = false
    )
  }

}
