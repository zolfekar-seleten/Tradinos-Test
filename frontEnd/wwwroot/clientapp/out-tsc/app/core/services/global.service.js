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
import { ToastrService } from "ngx-toastr";
var GlobalService = /** @class */ (function () {
    function GlobalService(toastr) {
        this.toastr = toastr;
    }
    GlobalService.prototype.goToUrl = function (url) {
        window.location.href = url;
    };
    // toaster functions
    GlobalService.prototype.toastrSuccess = function (message) {
        this.toastr.success(message, 'Success');
    };
    GlobalService.prototype.toastrError = function (message) {
        this.toastr.error(message, 'Error');
    };
    GlobalService.prototype.toastrInfo = function (message) {
        this.toastr.info(message, 'Information');
    };
    GlobalService.prototype.toastrWaring = function (message) {
        this.toastr.warning(message, 'Warning');
    };
    GlobalService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ToastrService])
    ], GlobalService);
    return GlobalService;
}());
export { GlobalService };
//# sourceMappingURL=global.service.js.map