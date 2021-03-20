import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Task, Tasks } from 'ClientApp/app/core/models/task.model';
import { TaskService } from 'ClientApp/app/core/services/task.service';
import { Router } from '@angular/router';
import { GlobalService } from 'ClientApp/app/core/services/global.service';
import { log } from 'util';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    tasks: Task[] = [];
    displayedTasks: Task[] = [];
    viewLoading: boolean = false;

    constructor(
        private cd: ChangeDetectorRef,
        private _taskService: TaskService,
        private _router: Router,
        private _globalService: GlobalService,
    ) { }

    ngOnInit() {
        this.cd.markForCheck();
        this.getData();
    }

    getData() {
        this._taskService.getAllTasks().subscribe(
            resp => {

                this.tasks = resp.data;
                this.displayedTasks = resp.data;
                this.cd.markForCheck();
            }
        );
    }
    showDetails(id): void {
        this._router.navigate(
            ['/task_details'],
            {
                queryParams: { id: id }
            }
        );

    }
    addNewTask() {
        this._router.navigate(
            ['/new_task']
        );
    }
    search(event: any) {
        log(event.target.value);
        let searchedContent = event.target.value;
        this.displayedTasks = [];

        this.tasks.forEach(task => {
            if (task.description.includes(searchedContent)) {
                this.displayedTasks.push(task);
            }
        });

        this.cd.markForCheck();
        
    }
}
