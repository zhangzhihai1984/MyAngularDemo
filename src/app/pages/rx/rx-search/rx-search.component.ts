import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject, fromEvent, from, Observable, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, filter, reduce, startWith } from 'rxjs/operators';
import { city_data } from './address.data';

@Component({
  selector: 'app-rx-search',
  templateUrl: './rx-search.component.html',
  styleUrls: ['./rx-search.component.scss']
})
export class RxSearchComponent implements OnInit {

  @Input() stopSubject: Subject<any>;
  @Output() logAdded = new EventEmitter<any>();

  @ViewChild('inputRef', { read: ElementRef, static: false }) inputRef: ElementRef;

  activated = false;

  $searchResults: Observable<string[]>;
  cities = this.getCities();

  constructor() { }

  ngOnInit() {
    this.activated = true;

    this.$searchResults = timer(0)
      .pipe(
        switchMap(_ => fromEvent(this.inputRef.nativeElement, 'keyup').pipe(
          debounceTime(500),
          map((ev: any) => ev.target.value.trim()),
          distinctUntilChanged(),
          switchMap(v => from(this.cities).pipe(
            filter(city => city.includes(v)),
            reduce((acc, curr) => [...acc, curr], [])
          )),
          startWith(this.cities)
        ))
      )
  }

  getCities(): string[] {
    const cities = [];
    for (const provinceName in city_data) {
      for (const cityName in city_data[provinceName]) {
        cities.push(cityName);
      }
    }

    return cities;
  }
}
