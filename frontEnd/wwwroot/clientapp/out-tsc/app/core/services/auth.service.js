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
var AuthService = /** @class */ (function () {
    function AuthService(_constants, httpClient) {
        this._constants = _constants;
        this.httpClient = httpClient;
    }
    AuthService.prototype.login = function (email, password) {
        return this.httpClient.post(this._constants.baseUrl + "login", {
            "email": email,
            "password": password,
        });
    };
    AuthService.prototype.register = function (user) {
        return this.httpClient.post(this._constants.baseUrl + "register", {
            "name": user.name,
            "password": user.password,
            "email": user.email,
            "confirm_password": user.password
        });
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ConstantsService,
            HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map