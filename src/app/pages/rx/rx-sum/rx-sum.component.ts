import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {
  Subject,
  fromEvent,
  combineLatest
} from 'rxjs';
import {
  tap,
  scan,
  mapTo,
  takeUntil,
} from 'rxjs/operators';

@Component({
  selector: 'app-rx-sum',
  templateUrl: './rx-sum.component.html',
  styleUrls: ['./rx-sum.component.scss']
})
export class RxSumComponent implements OnInit {

  @Input() stopSubject: Subject<any>;
  @Output() logAdded = new EventEmitter<any>();

  @ViewChild('sumParam1', { read: ElementRef }) sumParam1: ElementRef;
  @ViewChild('sumParam2', { read: ElementRef }) sumParam2: ElementRef;

  SUM_INIT_VALUE = '--';
  sumValue: string | number = this.SUM_INIT_VALUE;
  sumParamValue1: string | number = this.SUM_INIT_VALUE;
  sumParamValue2: string | number = this.SUM_INIT_VALUE;
  sumActivated = false;

  constructor() { }

  ngOnInit() {
  }

  sum() {
    this.sumActivated = true;

    const param1$ = fromEvent(this.sumParam1.nativeElement, 'click').pipe(
      mapTo(1),
      scan((acc, curr) => acc + curr, 0),
      tap(v => this.sumParamValue1 = v)
    )

    const param2$ = fromEvent(this.sumParam2.nativeElement, 'click').pipe(
      mapTo(1),
      scan((acc, curr) => acc + curr, 0),
      tap(v => this.sumParamValue2 = v)
    )

    combineLatest(
      param1$,
      param2$,
      (first, second) => ({
        val: first + second,
        des: `${first} + ${second} = ${first + second}`
      })

    ).pipe(
      // map(([val1, val2]) => val1 + val2),
      takeUntil(this.stopSubject)
    ).subscribe(
      v => {
        this.sumValue = v.val;
        this.logAdded.emit(v.des);
      },
      () => { },
      () => {
        this.sumActivated = false;
        this.sumParamValue1 = this.SUM_INIT_VALUE;
        this.sumParamValue2 = this.SUM_INIT_VALUE;
        this.sumValue = this.SUM_INIT_VALUE;
      }
    )
  }

}
