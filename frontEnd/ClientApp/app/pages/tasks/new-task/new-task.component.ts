import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoryService } from 'ClientApp/app/core/services/category.service';
import { TaskService } from 'ClientApp/app/core/services/task.service';
import { Category } from 'ClientApp/app/core/models/category.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'ClientApp/app/core/models/task.model';
import { GlobalService } from 'ClientApp/app/core/services/global.service';
import { log } from 'util';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

    taskForm: FormGroup;
    loading = false;

    categories: Category[] = [];
    selectedCategories: Category[] = [];
    selectedCategoriesIds: number[] = [];
    subTasks: string[] = [];

    newTask = new Task();

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private _categoryService: CategoryService,
        private _taskService: TaskService,
        private cd: ChangeDetectorRef,
        private _globalService: GlobalService,
        private datePipe: DatePipe
    ) { }

    ngOnInit() {
        this.getCategories();
        this.initForm(); 
        this.cd.markForCheck();
  }

    initForm() {
        this.taskForm = this.formBuilder.group({
            description: ['', Validators.required],
            deadline: ['', Validators.required]
        });
    }

    getCategories() {
        this._categoryService.getAllCategories().subscribe(
            resp => {

                this.categories = resp.data;
                this.cd.markForCheck();
            }
        );
    }
 
    addCategory(categoryId) {
        let categoryToRemove = this.categories.find(u => u.id == categoryId);
        this.categories = this.categories.filter(obj => obj !== categoryToRemove);
        this.selectedCategories.push(categoryToRemove);
        this.selectedCategoriesIds.push(categoryId);
        this.cd.detectChanges;
    }

    removeCategory(categoryId) {
        let categoryToRemove = this.selectedCategories.find(u => u.id == categoryId);
        this.selectedCategories = this.selectedCategories.filter(obj => obj !== categoryToRemove);
        this.selectedCategoriesIds = this.selectedCategoriesIds.filter(obj => obj !== categoryId);
        this.categories.push(categoryToRemove);
        this.cd.detectChanges;
    }
    
    addSubTask(event: any) {
        log(event.target.value);
        this.subTasks.push(event.target.value);
       
    }
    onSubmit() {
        

        // stop here if form is invalid
        if (this.taskForm.invalid) {
            return;
        }

        this.loading = true;

        this.prepareTask();
        this._taskService.createNewTask(this.newTask, this.selectedCategoriesIds, this.subTasks)
            .subscribe(resp => {
             
                this.router.navigate(["tasks"]);
                this._globalService.toastrSuccess("Task added successfully");

        }, error => { 
            this._globalService.toastrError(error.error);
        });
}

prepareTask(){
    const controls = this.taskForm.controls;
    this.newTask.description = controls['description'].value;
    let date = this.datePipe.transform(controls['deadline'].value, 'yyyy-MM-dd');
    this.newTask.deadline = date;
    this.newTask.categories
    }
}
