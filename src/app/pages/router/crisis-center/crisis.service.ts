import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }

  getCrises(): Observable<Crisis[]> {
    return of(CRISES)
  }
}
