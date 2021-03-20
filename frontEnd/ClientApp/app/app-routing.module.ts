import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';  
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth-guard.service'; 
import { AboutPageComponent } from './pages/about-page/about-page.component'; 
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskDetailsComponent } from './pages/tasks/task-details/task-details.component';
import { NewTaskComponent } from './pages/tasks/new-task/new-task.component';


const routes: Routes = [

    { path: '', component: HomePageComponent },
   
    { path: 'home', component: HomePageComponent },
    
  
    { path: 'login', component: LoginComponent },
      
    {
        path: 'sign-up', component: SignUpComponent
    }, 
     
    {
        path: 'tasks', component: TasksComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'task_details', component: TaskDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'new_task', component: NewTaskComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'about', component: AboutPageComponent
    },
   { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgRoutingModule { }
