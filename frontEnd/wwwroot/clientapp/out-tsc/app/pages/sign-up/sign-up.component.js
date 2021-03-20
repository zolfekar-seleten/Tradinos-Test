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
import { User } from '../../core/models/user.model';
import { GlobalService } from '../../../app/core/services/global.service';
import { RegisterService } from '../../../app/core/services/register.service';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, router, datePipe, _registerService, _globalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.datePipe = datePipe;
        this._registerService = _registerService;
        this._globalService = _globalService;
        this.loading = false;
        this.submitted = false;
        this.nationalities = ['syrian', 'others'];
        this.startDate = new Date(1990, 0, 1);
        this.userData = new User();
        this.nameIsTaken = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.userData.gender = 'male';
        this.initForm();
    };
    // convenience getter for easy access to form fields
    SignUpComponent.prototype.initForm = function () {
        this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            gender: ['', ''],
            nationality: ['', Validators.required],
            phone_number: ['', Validators.required],
            birthday: ['', Validators.required],
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
        this._registerService.register(this.userData).subscribe(function (resp) {
            //console.log(resp);
            _this.user = resp.success;
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            localStorage.setItem('isLoggedIn', "true");
            _this.router.navigate(["user"]);
            _this._globalService.toastrSuccess("Account Created Successfully");
        }, function (error) {
            _this._globalService.toastrError(error.error);
        });
    };
    SignUpComponent.prototype.prepareUser = function () {
        var controls = this.registerForm.controls;
        this.userData.first_name = controls['first_name'].value;
        this.userData.last_name = controls['last_name'].value;
        this.userData.username = controls['username'].value;
        this.userData.password = controls['password'].value;
        this.userData.nationality = controls['nationality'].value;
        this.userData.number_phone = controls['phone_number'].value;
        this.userData.gender = (controls['gender'].value == "") ? 'male' : controls['gender'].value;
    };
    SignUpComponent.prototype.setBirthday = function (event) {
        this.userData.birthday = this.datePipe.transform(event.value, 'MM-dd-yyyy');
    };
    SignUpComponent.prototype.checkUserNameIfIsUniqe = function () {
        var _this = this;
        var controles = this.registerForm.controls;
        var username = controles['username'].value;
        this._registerService.checkUserNameIfIsUniqe(username).subscribe(function (resp) {
            if (resp == 'is token ') {
                _this.nameIsTaken = true;
                //this._globalService.toastrError("this user name is taken try another one");
            }
            else {
                _this.nameIsTaken = false;
            }
        });
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
            RegisterService,
            GlobalService])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map