import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component'; 
import { ConstantsService } from './core/services/constants.service';
import { NgRoutingModule } from './app-routing.module';



import { CustomMaterialModule, } from './core/material.module';
import {
    MatRadioModule, MatSelectModule, MatTabsModule,
    MatDatepickerModule, MatNativeDateModule, MatTableModule, MatDialogModule,
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { ToastrModule } from "ngx-toastr";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth-guard.service';

import 'hammerjs'; 
 import { DataTablesModule } from 'angular-datatables';
import { AboutPageComponent } from './pages/about-page/about-page.component';
 
//social media sharing
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { NavbarComponent } from './pages/materials/navbar/navbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
 
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuNavComponent } from './pages/materials/menu-nav/menu-nav.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthService } from './core/services/auth.service';
import { TaskService } from './core/services/task.service';
import { UserService } from './core/services/user.service';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskDetailsComponent } from './pages/tasks/task-details/task-details.component';
import { NewTaskComponent } from './pages/tasks/new-task/new-task.component';

@NgModule({
  declarations: [
      AppComponent,
      
    HomePageComponent, 
      SignUpComponent, 
      PageNotFoundComponent,   
      AboutPageComponent, 
      NavbarComponent,
      MenuNavComponent,
      LoginComponent,
      TasksComponent,
      TaskDetailsComponent,
      NewTaskComponent,
  ],
  imports: [
      BrowserModule,
      NgRoutingModule,
      BrowserAnimationsModule,
      CustomMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatRadioModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTooltipModule,
      MatTableModule,
      MatTabsModule,
      ToastrModule.forRoot(),
      DataTablesModule,
      MatDialogModule,
      JwSocialButtonsModule,
      MatSidenavModule,
      MatGridListModule,
      FlexLayoutModule,
      //animation
      BrowserModule,
      BrowserAnimationsModule
    ],
    entryComponents: [ 
    ],
    providers: [
        ConstantsService,
        AuthService,
        TaskService,
        UserService,
        DatePipe,
        AuthGuard,
       ],
  bootstrap: [AppComponent]
})
export class AppModule { }
