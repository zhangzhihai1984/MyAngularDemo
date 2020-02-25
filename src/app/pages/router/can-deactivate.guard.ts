import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(
    component: CanDeactivateComponent,
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ) {
    return component.canDeactivate ? component.canDeactivate() : true
  }
}

export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | boolean
}
