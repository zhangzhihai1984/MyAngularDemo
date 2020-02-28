import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.checkLogin(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn)
      return true

    this.authService.redirectUrl = url
    // console.log(`<> ${url.substring(0, url.lastIndexOf('/'))} /login`);
    // console.log(`<> ${url.replace('admin', 'login')}`)

    let sessionId = 123456789

    this.router.navigate(['/router/login'], {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    })
    // this.router.navigateByUrl(url.replace('admin', 'login'))
    return false
  }
}
