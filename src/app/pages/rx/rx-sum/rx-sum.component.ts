import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core'
import {
  Subject,
  fromEvent,
  combineLatest,
  Observable,
  merge,
} from 'rxjs'
import {
  scan,
  mapTo,
  takeUntil,
  startWith,
  map,
  filter,
} from 'rxjs/operators'

const INIT_VALUE = '--'

@Component({
  selector: 'app-rx-sum',
  templateUrl: './rx-sum.component.html',
  styleUrls: ['./rx-sum.component.scss']
})
export class RxSumComponent implements OnInit {

  @Input() stopSubject: Subject<any>
  @Output() logAdded = new EventEmitter<any>()

  @ViewChild('param1', { read: ElementRef, static: false }) param1: ElementRef
  @ViewChild('param2', { read: ElementRef, static: false }) param2: ElementRef

  activateSubject = new Subject<void>()
  activated$: Observable<boolean>
  param1$: Observable<string>
  param2$: Observable<string>
  sum$: Observable<string>

  constructor() { }

  ngOnInit() {
    this.activated$ = merge(
      this.stopSubject.pipe(mapTo(false)),
      this.activateSubject.pipe(mapTo(true))
    ).pipe(startWith(false))
  }

  activate() {
    this.activateSubject.next()

    this.param1$ = fromEvent(this.param1.nativeElement, 'click').pipe(
      mapTo(1),
      scan((acc, curr) => acc + curr, 0),
      startWith(INIT_VALUE),
      map(v => `${v}`)
    )

    this.param2$ = fromEvent(this.param2.nativeElement, 'click').pipe(
      mapTo(1),
      scan((acc, curr) => acc + curr, 0),
      startWith(INIT_VALUE),
      map(v => `${v}`)
    )

    this.sum$ = combineLatest(
      this.param1$.pipe(filter(v => v != INIT_VALUE), map(v => parseInt(v))),
      this.param2$.pipe(filter(v => v != INIT_VALUE), map(v => parseInt(v))),
      (first, second) => {
        const sum = `${first + second}`
        this.logAdded.emit(`${first} + ${second} = ${sum}`)
        return sum
      }).pipe(
        startWith(INIT_VALUE),
        takeUntil(this.stopSubject)
      )
  }
}
