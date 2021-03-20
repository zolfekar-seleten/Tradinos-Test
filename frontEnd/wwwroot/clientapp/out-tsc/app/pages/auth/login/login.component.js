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
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'ClientApp/app/app.component';
import { GlobalService } from 'ClientApp/app/core/services/global.service';
import { AuthService } from 'ClientApp/app/core/services/auth.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, _loginService, _globalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this._loginService = _loginService;
        this._globalService = _globalService;
        this.showSpinner = false;
        this.classReference = AppComponent;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        this.showSpinner = true;
        var controls = this.loginForm.controls;
        this.email = controls['email'].value;
        this.password = controls['password'].value;
        this._loginService.login(this.email, this.password).subscribe(function (resp) {
            _this.showSpinner = false;
            _this.user = resp.success;
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            localStorage.setItem('isLoggedIn', "true");
            // AppComponent.isLogedIn = true;
            // ConstantsService.logedInUser = resp.success.user;
            // console.log("hiiii", ConstantsService.logedInUser.first_name);
            // console.log(resp.success.token);
            _this.router.navigate(["user"]);
        }, function (err) {
            _this._globalService.toastrError('Email or Password is wrong');
            _this.showSpinner = false;
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-log-in',
            templateUrl: './log-in.component.html',
            styleUrls: ['./log-in.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            Router,
            AuthService,
            GlobalService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map