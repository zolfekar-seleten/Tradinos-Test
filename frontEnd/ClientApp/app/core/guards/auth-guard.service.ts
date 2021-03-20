// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
import { AppState } from '../reducers';
// Auth reducers and selectors

//import { isLoggedIn } from '../_selectors/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(/*private store: Store<AppState>,*/ private router: Router) { }

    canActivate(/*route: ActivatedRouteSnapshot, state: RouterStateSnapshot*/) {
        // return this.store
        //     .pipe(
        //         select(isLoggedIn),
        //         tap(loggedIn => {
        //             if (!loggedIn) {
        //                 this.router.navigateByUrl('/auth/login');
        //             }
        //         })
        //     );
        //let lastclear: any = localStorage.getItem('lastclear'),
        //    time_now: any = (new Date()).getTime();

        //// .getTime() returns milliseconds so 1000 * 60 * 60 * 24 = 24 days
        //if ((time_now - lastclear) > 1000 * 60 * 60 * 24) {

        //    localStorage.clear();

        //    localStorage.setItem('lastclear', time_now);
        //}
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser != null) {
            // authorised so return true
          //  console.log("user is loged in");

            return true;
        }
        //console.log("user isn't loged in");
        // not logged in so redirect to login page with the return url
        this.router.navigate(["sign-up"]);
        //this.router.navigateByUrl('/sign-up');
        return false;
    }
}
