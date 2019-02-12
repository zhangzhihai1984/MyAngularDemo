import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TableGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('<Guard>', '<URL>', route.url);
        console.log('<Guard>', '<Data>', route.data);
        return true;
    }

}