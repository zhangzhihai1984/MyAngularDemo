import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
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

  @ViewChild('param1', { static: false }) param1: ElementRef;
  @ViewChild('param2', { static: false }) param2: ElementRef;

  INIT_VALUE = '--';
  sumValue: string | number = this.INIT_VALUE;
  paramValue1: string | number = this.INIT_VALUE;
  paramValue2: string | number = this.INIT_VALUE;
  activated = false;

  constructor() { }

  ngOnInit() {
  }

  activate() {
    this.activated = true;

    const param1$ = fromEvent(this.param1.nativeElement, 'click').pipe(
      mapTo(1),
      scan((acc, curr) => acc + curr, 0),
      tap(v => this.paramValue1 = v)
    )

    const param2$ = fromEvent(this.param2.nativeElement, 'click').pipe(
      mapTo(1),
      scan((acc, curr) => acc + curr, 0),
      tap(v => this.paramValue2 = v)
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
        this.activated = false;
        this.paramValue1 = this.INIT_VALUE;
        this.paramValue2 = this.INIT_VALUE;
        this.sumValue = this.INIT_VALUE;
      }
    )
  }

}
