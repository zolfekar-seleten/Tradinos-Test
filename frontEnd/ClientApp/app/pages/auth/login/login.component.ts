import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { AppComponent } from 'ClientApp/app/app.component';
import { GlobalService } from 'ClientApp/app/core/services/global.service';
import { AuthService } from 'ClientApp/app/core/services/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    showSpinner: boolean = false;
    loginForm: FormGroup;
    user: any;

    public classReference = AppComponent;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
       
        private _loginService: AuthService,
        private _globalService: GlobalService,
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({

            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],

        });
  }
    login() {

        if (this.loginForm.invalid) {
            return;
        }
       
        this.showSpinner = true;
        const controls = this.loginForm.controls;
        this.email = controls['email'].value;
        this.password = controls['password'].value;
        this._loginService.login(this.email, this.password).subscribe(resp => {
            this.showSpinner = false;
            this.user = resp.success;

            localStorage.setItem('currentUser', JSON.stringify(this.user));
            localStorage.setItem('isLoggedIn', "true");
            // AppComponent.isLogedIn = true;
            // ConstantsService.logedInUser = resp.success.user;
            // console.log("hiiii", ConstantsService.logedInUser.first_name);
           // console.log(resp.success.token);
            this.router.navigate(["tasks"]);
         
        },

            err => {
                this._globalService.toastrError('Email or Password is wrong')
                this.showSpinner = false;

            });

    }


}
