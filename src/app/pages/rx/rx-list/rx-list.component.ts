import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import {
  of,
  throwError,
  from,
  never,
  empty,
  interval,
  range,
  timer,
  merge,
  Subject,
  fromEvent,
  combineLatest
} from 'rxjs';
import {
  map,
  catchError,
  take,
  tap,
  flatMap,
  debounceTime,
  delay,
  delayWhen,
  takeWhile,
  takeUntil,
  startWith,
  scan,
  reduce,
  mapTo,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-rx-list',
  templateUrl: './rx-list.component.html',
  styleUrls: ['./rx-list.component.scss']
})
export class RxListComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  results = [];
  height = '100%';
  heightFlag = false;

  @ViewChild('console', { static: false }) console: ElementRef;

  stopSubject = new Subject<any>();

  constructor() { }

  ngOnInit() {
    of(1, 2, 3, 4).pipe(
      // tap(v => console.log('<Tap>')),
      delay(500),
      map(n => {
        if (n == 4)
          throw 'four!'
        return n;
      }),
      // catchError((err, caught) => of('I', 'II', 'III')),
      // catchError((err, caught) => empty()),
      catchError(err => throwError('HaHa'))
      // take(20),
    )
    // .subscribe(
    //   v => console.log(v),
    //   err => console.log('Error', err),
    //   () => console.log('Completed')
    // );

    from([1, 2, 3]).pipe(
      flatMap(v => of(v))
    )
    // .subscribe(v => console.log(v))

    throwError("This is an error!")
    // .subscribe(
    //   v => console.log(v),
    //   err => console.log(err)
    // )

    // this.interval();
    // this.range();
    // this.timer();
    // this.delayWhen();
    // this.takeWhile();
    // this.takeUntil();
    // this.startWith();
    // this.scan();
    // this.reduce();
    // this.merge();
    // this.mergeMap();
    // this.switchMap();

    this.stopSubject.subscribe(v => console.log('<stop>', v))
  }

  ngAfterViewInit() {
    timer(0)
      .subscribe(_ => {
        this.heightFlag = true
        this.height = `${this.console.nativeElement.offsetHeight}px`
        console.log('<height>', this.height);
      })
  }

  ngAfterViewChecked() {
    const element = this.console.nativeElement;
    const scrollHeight = element.scrollHeight;
    const offsetHeight = element.offsetHeight;

    if (scrollHeight > offsetHeight)
      element.scrollTop = scrollHeight - offsetHeight;
  }

  ngOnDestroy() {
    this.stopRx();
  }

  stopRx() {
    this.stopSubject.next();
  }

  clearLog() {
    this.results = [];
  }

  addLog(v: any) {
    this.results.push(v);
  }

  @ViewChild('start', { static: false }) startButton: ElementRef
  @ViewChild('pause', { static: false }) pauseButton: ElementRef
  @ViewChild('resume', { static: false }) resumeButton: ElementRef
  @ViewChild('stop', { static: false }) stopButton: ElementRef
  INIT_COUNTDOWN = 20
  countdown
  empty() {
    this.countdown = this.INIT_COUNTDOWN
    const start$ = fromEvent(this.startButton.nativeElement, 'click').pipe(mapTo('start'), tap(() => this.countdown = this.INIT_COUNTDOWN))
    const pause$ = fromEvent(this.pauseButton.nativeElement, 'click').pipe(mapTo('pause'))
    const resume$ = fromEvent(this.resumeButton.nativeElement, 'click').pipe(mapTo('resume'))
    const stop$ = fromEvent(this.stopButton.nativeElement, 'click').pipe(mapTo('stop'), tap(() => this.countdown = 0))
    const countdown$ = interval(1000).pipe(
      map(() => this.countdown - 1),
      takeWhile(v => v >= 0)
    )

    merge(start$, pause$, resume$, stop$).pipe(
      switchMap(v => {
        this.results.push(v)
        return v == 'start' || v == 'resume' ? countdown$ : empty()
      }),
      takeUntil(this.stopSubject)
    ).subscribe(v => {
      this.countdown = v
      this.results.push(v);
    });
  }

  switchMap() {
    let switchFlag = false;
    timer(1000, 5000).pipe(
      tap(() => switchFlag = true),
      switchMap(
        () => interval(1000),
        (oVal, iVal, oIndex, iIndex) => `outer stream: ${oVal} inner stream: ${iVal}`
      ),
      takeUntil(this.stopSubject)
    ).subscribe(v => {
      if (switchFlag) {
        switchFlag = false;
        this.results.push('switch map');
      }
      this.results.push(v)
    });
  }

  mergeMap() {
    this.results.push('concurrent is 2');
    interval(1000).pipe(
      flatMap(
        () => interval(2000).pipe(take(5)),
        (oVal, iVal, oIndex, iIndex) => `outer stream: ${oVal} inner stream: ${iVal}`,
        2),
      takeUntil(this.stopSubject)
    ).subscribe(v => this.results.push(v))
  }

  merge() {
    const first$ = interval(1500).pipe(map(v => `first stream ${v}`), take(5))
    const second$ = interval(2000).pipe(map(v => `second stream ${v}`), take(5))
    const third$ = interval(2500).pipe(map(v => `third stream ${v}`), take(5))

    merge(first$, second$, third$).pipe(takeUntil(this.stopSubject)).subscribe(v => this.results.push(v))
  }

  delayWhen() {
    of(1, 2, 3, 4, 5).pipe(
      delayWhen(v => timer(500 * v))
    ).subscribe(v => console.log('<delayWhen>', v))
  }

  takeWhile() {
    of(1, 2, 3, 4, 5).pipe(
      takeWhile(v => v <= 4)
    ).subscribe(v => console.log('<takeWhile>', v))
  }

  takeUntil() {
    interval(1000).pipe(
      takeUntil(timer(5000))
    ).subscribe(v => console.log('<takeUntil>', v));
  }

  startWith() {
    of(1, 2, 3, 4).pipe(
      startWith(0)
    ).subscribe(v => console.log('<startWith>', v))
  }

  scan() {
    of(1, 2, 3, 4).pipe(
      startWith(0),
      scan((acc, value) => acc + value)
    ).subscribe(v => console.log('scan', v))

    of(1, 2, 3, 4).pipe(
      scan((acc, value) => acc + value, 0)
    ).subscribe(v => console.log('scan', v))
  }

  reduce() {
    of(1, 2, 3, 4).pipe(
      reduce((acc, val) => acc + val, 0)
    ).subscribe(v => console.log('<reduce>', v))
  }
}
