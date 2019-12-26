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

  @Output() logAdded = new EventEmitter<any>();

  @ViewChild('inputRef', { read: ElementRef, static: false }) inputRef: ElementRef;

  searchResults$: Observable<string[]>;

  get cities(): string[] {
    const cities = [];
    for (const provinceName in city_data) {
      for (const cityName in city_data[provinceName]) {
        cities.push(cityName);
      }
    }

    return cities;
  }

  constructor() { }

  ngOnInit() {
    this.searchResults$ = timer(0)
      .pipe(
        switchMap(_ => fromEvent(this.inputRef.nativeElement, 'keyup').pipe(
          debounceTime(500),
          map((ev: any) => ev.target.value.trim()),
          distinctUntilChanged(),
          map(v => this.cities.filter(city => city.includes(v))),
          // switchMap(v => from(this.cities).pipe(
          //   filter(city => city.includes(v)),
          //   reduce((acc, curr) => [...acc, curr], [])
          // )),
          startWith(this.cities)
        ))
      )
  }
}
