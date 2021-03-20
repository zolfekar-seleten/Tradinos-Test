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
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../core/models/user.model';
import { DatePipe } from '@angular/common';
import { GlobalService } from '../../../core/services/global.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { LoginService } from '../../../core/services/login.service';
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, datePipe, _globalService, router, _userService, _loginService) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this._globalService = _globalService;
        this.router = router;
        this._userService = _userService;
        this._loginService = _loginService;
        this.nationalities = ['syrian', 'others'];
        this.startDate = new Date(1990, 0, 1);
        this.userData = new User();
        this.nameIsTaken = false;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var useId = JSON.parse(localStorage.getItem('currentUser')).user.id;
        this._loginService.getUserDetails(useId).subscribe(function (resp) {
            _this.userData = resp;
            console.log('user data : ', _this.userData);
        });
        this.initForm();
    };
    EditUserComponent.prototype.initForm = function () {
        this.editUserForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            // username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            gender: ['', ''],
            nationality: ['', Validators.required],
            phone_number: ['', Validators.required],
            birthday: ['', Validators.required],
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.editUserForm.invalid) {
            return;
        }
        this.prepareUser();
        this._userService.changeUserDetails(this.userData.id, this.userData).subscribe(function (resp) {
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
    EditUserComponent.prototype.prepareUser = function () {
        var controls = this.editUserForm.controls;
        this.userData.first_name = controls['first_name'].value;
        this.userData.last_name = controls['last_name'].value;
        //  this.userData.username = controls['username'].value;
        this.userData.password = controls['password'].value;
        this.userData.nationality = controls['nationality'].value;
        this.userData.number_phone = controls['phone_number'].value;
        this.userData.gender = (controls['gender'].value == "") ? 'male' : controls['gender'].value;
    };
    EditUserComponent.prototype.setBirthday = function (event) {
        this.userData.birthday = this.datePipe.transform(event.value, 'MM-dd-yyyy');
    };
    EditUserComponent = __decorate([
        Component({
            selector: 'app-edit-user',
            templateUrl: './edit-user.component.html',
            styleUrls: ['./edit-user.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            DatePipe,
            GlobalService,
            Router,
            UserService,
            LoginService])
    ], EditUserComponent);
    return EditUserComponent;
}());
export { EditUserComponent };
//# sourceMappingURL=edit-user.component.js.map