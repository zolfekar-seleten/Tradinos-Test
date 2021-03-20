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
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../app/core/services/login.service';
var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBuilder, router, dialogRef, _loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialogRef = dialogRef;
        this._loginService = _loginService;
        this.showSpinner = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        //if (this.username == 'admin' && this.password == 'admin') {
        //    this.router.navigate(["user"]);
        //    this.dialogRef.close();
        //} else {
        //    alert("Invalid credentials");
        //}
        this.showSpinner = true;
        var controls = this.loginForm.controls;
        this.username = controls['username'].value;
        this.password = controls['password'].value;
        this._loginService.login(this.username, this.password).subscribe(function (resp) {
            _this.showSpinner = false;
            _this.user = resp.success;
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            localStorage.setItem('isLoggedIn', "true");
            // AppComponent.isLogedIn = true;
            // ConstantsService.logedInUser = resp.success.user;
            // console.log("hiiii", ConstantsService.logedInUser.first_name);
            // console.log(resp.success.token);
            _this.router.navigate(["user"]);
            _this.dialogRef.close();
        }, function (err) {
            _this.showSpinner = false;
        });
    };
    SignInComponent = __decorate([
        Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            Router,
            MatDialogRef,
            LoginService])
    ], SignInComponent);
    return SignInComponent;
}());
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map