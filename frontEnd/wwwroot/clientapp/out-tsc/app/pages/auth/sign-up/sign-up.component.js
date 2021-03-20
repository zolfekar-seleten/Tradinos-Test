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
import { DatePipe } from '@angular/common';
import { AppComponent } from 'ClientApp/app/app.component';
import { User } from 'ClientApp/app/core/models/user.model';
import { AuthService } from 'ClientApp/app/core/services/auth.service';
import { GlobalService } from 'ClientApp/app/core/services/global.service';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, router, datePipe, _registerService, _globalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.datePipe = datePipe;
        this._registerService = _registerService;
        this._globalService = _globalService;
        this.loading = false;
        this.submitted = false;
        this.userData = new User();
        this.showSpinner = false;
        this.classReference = AppComponent;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    // convenience getter for easy access to form fields
    SignUpComponent.prototype.initForm = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    };
    Object.defineProperty(SignUpComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.prepareUser();
        this.showSpinner = true;
        this._registerService.register(this.userData).subscribe(function (resp) {
            //console.log(resp);
            _this.user = resp.success;
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            _this.showSpinner = false;
            localStorage.setItem('isLoggedIn', "true");
            _this.router.navigate(["user"]);
            _this._globalService.toastrSuccess("Account Created Successfully");
        }, function (error) {
            _this.showSpinner = false;
            _this._globalService.toastrError(error.error);
        });
    };
    SignUpComponent.prototype.prepareUser = function () {
        var controls = this.registerForm.controls;
        this.userData.name = controls['name'].value;
        this.userData.password = controls['password'].value;
        this.userData.email = controls['email'].value;
    };
    SignUpComponent = __decorate([
        Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            Router,
            DatePipe,
            AuthService,
            GlobalService])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map