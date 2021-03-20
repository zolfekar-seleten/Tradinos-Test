
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConstantsService } from './constants.service';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService { 
    token: string = JSON.parse(localStorage.getItem('currentUser')).token;
    endPoint: string;
    options = {
        headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token
        })
    };

    constructor(
        private http: HttpClient,
        private _constants: ConstantsService,
    ) {
        this.endPoint = _constants.baseUrl +"tasks"
    }

    getAllTasks() {
        return this.http.get<any>(this.endPoint, this.options);
    }

    getTaskDetails(TaskId) {
        return this.http.get<any>(this.endPoint + "/" + TaskId, this.options);
    }

    createNewTask(task: Task,categoris :number[], subTasks :string[]) {
        return this.http.post<any>(this.endPoint,
            {
                "description": task.description,
                "deadline": task.deadline,
                "categories": categoris,
                "sub_tasks": subTasks
            }

            , this.options)
    }

}
