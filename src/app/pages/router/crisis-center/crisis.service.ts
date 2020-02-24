import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }

  getCrises(): Observable<Crisis[]> {
    return of(CRISES)
  }

  getCrisis(id: number | string): Observable<Crisis> {
    return this.getCrises().pipe(map(crises => crises.find(crisis => crisis.id === +id)))
  }
}
