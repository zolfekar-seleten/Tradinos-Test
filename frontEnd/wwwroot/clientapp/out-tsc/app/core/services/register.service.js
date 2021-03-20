var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';
var RegisterService = /** @class */ (function () {
    function RegisterService(_constants, httpClient) {
        this._constants = _constants;
        this.httpClient = httpClient;
    }
    RegisterService.prototype.register = function (user) {
        return this.httpClient.post(this._constants.baseUrl + "register", {
            "username": user.username,
            "password": user.password,
            "nationality": user.nationality,
            "email": user.email,
            "gender": user.gender,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "birthday": user.birthday,
            "age": user.age,
            "number_phone": user.number_phone
        });
    };
    RegisterService.prototype.checkUserNameIfIsUniqe = function (username) {
        return this.httpClient.post(this._constants.baseUrl + "username", {
            "username": username,
        });
    };
    RegisterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ConstantsService,
            HttpClient])
    ], RegisterService);
    return RegisterService;
}());
export { RegisterService };
//# sourceMappingURL=register.service.js.map