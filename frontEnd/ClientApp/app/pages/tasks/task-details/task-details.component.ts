import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Task } from 'ClientApp/app/core/models/task.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from 'ClientApp/app/core/services/task.service';
import { log } from 'util';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

    task: Task; 
    taskId: number = 0;
    loading: boolean = false;
    constructor(
        private cd: ChangeDetectorRef, 
        private activateRouter: ActivatedRoute,
        private _taskService: TaskService,
        private _location: Location,
) { }

    ngOnInit() {
        this.loading = true;
        this.activateRouter
            .queryParams
            .subscribe(params => {
                this.taskId = +params['id'] || 0;
            });

        this._taskService.getTaskDetails(this.taskId).subscribe(
            resp => {
                log(resp.data);
                this.task = resp.data;
                this.loading = false;
                this.cd.markForCheck();
            }
        );
  }

    backClicked() {
        this._location.back();
    }
}
