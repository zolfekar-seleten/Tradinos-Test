var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from '../../../../app/app.component';
var MenuNavComponent = /** @class */ (function () {
    function MenuNavComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.classReference = AppComponent;
    }
    MenuNavComponent.prototype.ngOnInit = function () {
        if (AppComponent.textDir = 'RTL')
            this.language = 'AR';
        else
            this.language = 'EN';
    };
    MenuNavComponent.prototype.changeLanguage = function () {
        if (this.language == 'EN') {
            AppComponent.textDir = 'RTL';
            this.language = 'AR';
            //console.log(AppComponent.textDir);
        }
        else {
            AppComponent.textDir = 'LTR';
            this.language = 'EN';
            //console.log(AppComponent.textDir);
        }
    };
    //openDialog(): void {
    //    const dialogRef = this.dialog.open(SignInComponent, {
    //        width: '450px',
    //    });
    //    dialogRef.afterClosed().subscribe(result => {
    //        console.log('The dialog was closed');
    //    });
    //}
    MenuNavComponent.prototype.logOut = function () {
        //   console.log(localStorage.getItem('currentUser'));
        this.router.navigate(["home"]);
        localStorage.removeItem('currentUser');
        localStorage.setItem('isLoggedIn', "false");
        // AppComponent.isLogedIn = false;
        // ConstantsService.logedInUser = new User();
        console.log("user log out");
        //   console.log(localStorage.getItem('currentUser'));
        // this.store.dispatch(new Logout());
    };
    MenuNavComponent.prototype.isLogged = function () {
        if (localStorage.getItem('isLoggedIn') == "true") {
            return true;
        }
        return false;
    };
    MenuNavComponent = __decorate([
        Component({
            selector: 'app-menu-nav',
            templateUrl: './menu-nav.component.html',
            styleUrls: ['./menu-nav.component.css']
        }),
        __metadata("design:paramtypes", [MatDialog,
            Router])
    ], MenuNavComponent);
    return MenuNavComponent;
}());
export { MenuNavComponent };
//# sourceMappingURL=menu-nav.component.js.map