var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Auth reducers and selectors
//import { isLoggedIn } from '../_selectors/auth.selectors';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(/*private store: Store<AppState>,*/ router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function ( /*route: ActivatedRouteSnapshot, state: RouterStateSnapshot*/) {
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
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
    };
    AuthGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map