import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, AfterContentInit } from '@angular/core';
import {
  of,
  throwError,
  from,
  never,
  empty,
  interval,
  range,
  timer,
  merge
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
import { log } from 'util';

@Component({
  selector: 'app-rx-list',
  templateUrl: './rx-list.component.html',
  styleUrls: ['./rx-list.component.scss']
})
export class RxListComponent implements OnInit, AfterContentInit, AfterViewChecked {
  results = [];

  @ViewChild('console') console: ElementRef;

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
    this.switchMap();
  }

  height = '100%';

  ngAfterContentInit() {
    this.height = `${this.console.nativeElement.offsetHeight}px`;
    console.log('<height>', this.height);
  }

  ngAfterViewChecked() {
    const element = this.console.nativeElement;
    const scrollHeight = element.scrollHeight;
    const offsetHeight = element.offsetHeight;

    if (scrollHeight > offsetHeight)
      element.scrollTop = scrollHeight - offsetHeight;
  }

  switchMap() {
    interval(5000).pipe(
      switchMap(() => interval(300))
    ).subscribe(v => {
      this.results.push(v);
      console.log('<switchMap>', v, this.console.nativeElement.scrollHeight, this.console.nativeElement.offsetHeight);
    });
  }

  mergeMap() {
    // of('hello').pipe(
    //   flatMap(v => of(`${v} world`))
    // ).subscribe(v => console.log('<mergeMap/flatMap>', v))

    interval(1000).pipe(
      flatMap(v => interval(3000).pipe(take(10)), 2)
    ).subscribe(v => console.log('<mergeMap/flatMap>', v))
  }

  merge() {
    const first$ = interval(1000).pipe(mapTo('first'), take(5))
    const second$ = interval(1300).pipe(mapTo('second'), take(5))

    merge(first$, second$).subscribe(v => console.log('<merge>', v))
    first$.pipe().subscribe(v => console.log('<merge>', v))
  }

  interval() {
    interval(500).pipe(
      take(10)
    ).subscribe(v => console.log('<interval>', v)
    )
  }

  range() {
    range(1, 10).subscribe(v => console.log('<range>', v))
  }

  timer() {
    // timer(1000).subscribe(v => console.log('<timer>', v))
    timer(1000, 2000).pipe(
      take(10)
    ).subscribe(v => console.log('<timer>', v))
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
