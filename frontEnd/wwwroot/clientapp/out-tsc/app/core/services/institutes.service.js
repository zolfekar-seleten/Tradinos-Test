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
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
var InstitutesService = /** @class */ (function () {
    function InstitutesService(_constantServise, httpClient) {
        this._constantServise = _constantServise;
        this.httpClient = httpClient;
    }
    InstitutesService.prototype.getAllInstitutes = function () {
        return this.httpClient.get(this._constantServise.baseUrl + "all/institutes");
    };
    InstitutesService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ConstantsService,
            HttpClient])
    ], InstitutesService);
    return InstitutesService;
}());
export { InstitutesService };
//# sourceMappingURL=institutes.service.js.map