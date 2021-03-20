var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConstantsService } from './core/services/constants.service';
import { NgRoutingModule } from './app-routing.module';
import { CustomMaterialModule, } from './core/material.module';
import { MatRadioModule, MatSelectModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatDialogModule, } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomePageComponent,
                SignUpComponent,
                PageNotFoundComponent,
                AboutPageComponent,
                NavbarComponent,
                MenuNavComponent,
                LoginComponent,
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
            ],
            entryComponents: [],
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map