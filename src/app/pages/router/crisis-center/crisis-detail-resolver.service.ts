import { Injectable } from '@angular/core';
import { CrisisService } from './crisis.service';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Crisis } from './crisis';
import { Observable, of, EMPTY } from 'rxjs';
import { take, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private service: CrisisService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    let id = route.paramMap.get('id')

    return this.service.getCrisis(id).pipe(
      take(1),
      flatMap(crisis => {
        if (crisis)
          return of(crisis)

        this.router.navigateByUrl(state.url.substring(0, state.url.lastIndexOf('/')))
        return EMPTY
      })
    )
  }
}
