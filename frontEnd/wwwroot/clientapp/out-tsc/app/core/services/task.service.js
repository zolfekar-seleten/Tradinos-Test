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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from './constants.service';
var TaskService = /** @class */ (function () {
    function TaskService(http, _constants) {
        this.http = http;
        this._constants = _constants;
        this.token = JSON.parse(localStorage.getItem('currentUser')).token;
        this.options = {
            headers: new HttpHeaders({
                "Authorization": "Bearer " + this.token
            })
        };
        this.endPoint = _constants.baseUrl + "tasks";
    }
    TaskService.prototype.getAllTasks = function () {
        return this.http.get(this.endPoint, this.options);
    };
    TaskService.prototype.getTask = function (TaskId) {
        return this.http.get(this.endPoint + "/" + TaskId, this.options);
    };
    TaskService.prototype.createNewTask = function (task) {
        return this.http.post(this.endPoint, {
            "description": task.description,
            "deadline": task.deadline,
            "categories": task.categories,
            "sub_tasks": task.subTasks
        }, this.options);
    };
    TaskService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            ConstantsService])
    ], TaskService);
    return TaskService;
}());
export { TaskService };
//# sourceMappingURL=task.service.js.map