var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { User } from '../../core/models/user.model';
import { LoginService } from '../../../app/core/services/login.service';
import { UserService } from '../../../app/core/services/user.service';
import { GlobalService } from '../../../app/core/services/global.service';
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(cd, _loginService, _userService, _globalService) {
        this.cd = cd;
        this._loginService = _loginService;
        this._userService = _userService;
        this._globalService = _globalService;
        this.imgSrc = "http://institute.digital-edge.sy/storage";
        this.fileToUpload = null;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new User();
        var user = JSON.parse(localStorage.getItem('currentUser')).user;
        this._loginService.getUserDetails(user.id).subscribe(function (resp) {
            _this.user = resp;
            _this.imgSrc += resp.picture;
        });
        // console.log(this.user);
        //   console.log(this.user.picture);
    };
    UserProfileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        //console.log(this.fileToUpload.type);
    };
    UserProfileComponent.prototype.onUpload = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('File', this.fileToUpload);
        this._userService.changeUserPhoto(this.user.id, formData)
            .subscribe(function (res) {
            _this.cd.markForCheck();
            //console.log(this.isUploaded);
            _this._globalService.toastrSuccess("File Uploaded Successfully");
        }, function (err) {
            _this.cd.markForCheck();
            _this._globalService.toastrError(err.error);
        });
    };
    UserProfileComponent = __decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            LoginService,
            UserService,
            GlobalService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map