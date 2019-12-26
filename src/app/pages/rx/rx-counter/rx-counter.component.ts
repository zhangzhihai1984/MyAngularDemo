import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  Subject,
  timer,
  fromEvent,
  Observable
} from 'rxjs';
import {
  map,
  takeUntil,
  take,
  mapTo,
  scan,
  withLatestFrom,
  startWith,
  filter
} from 'rxjs/operators';

const INIT_REMAINING = 10;

@Component({
  selector: 'app-rx-counter',
  templateUrl: './rx-counter.component.html',
  styleUrls: ['./rx-counter.component.scss']
})
export class RxCounterComponent implements OnInit {

  @Input() stopSubject: Subject<any>;
  @Output() logAdded = new EventEmitter<any>();

  @ViewChild('totalRef', { read: ElementRef, static: false }) totalRef: ElementRef;

  activated = false;

  total$: Observable<number>;
  remaining$: Observable<number>;

  constructor() { }

  ngOnInit() {
  }

  activate() {
    this.activated = true;

    this.remaining$ = timer(0, 1000).pipe(
      take(INIT_REMAINING + 1),
      map(v => INIT_REMAINING - v),
      takeUntil(this.stopSubject)
    )

    this.total$ = fromEvent(this.totalRef.nativeElement, 'click').pipe(
      mapTo(1),
      startWith(0),
      scan((acc, curr) => acc + curr, 0),
      takeUntil(this.remaining$.pipe(filter(v => v == 0))),
      takeUntil(this.stopSubject)
    )

    this.remaining$.pipe(
      withLatestFrom(this.total$)
    ).subscribe(
      ([remaining, total]) => this.logAdded.emit(`remaining: ${remaining}s total: ${total}`),
      () => { },
      () => this.activated = false
    )
  }
}
