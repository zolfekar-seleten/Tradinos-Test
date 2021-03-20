import { SubTask } from "./sub-task.model";
import { Category } from "./category.model";

export class Task {

    public id: string;
    public description: string;
    public deadline: string;
    public end_flag: boolean; 
    public created_at: string;
    public sub_tasks: Array<SubTask> = [];
    public categories: Array<Category> = [];
}
export class Tasks {
    data: Array<Task> = [];
} 

 