import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';


 
import { AppComponent } from 'ClientApp/app/app.component';
import { User } from 'ClientApp/app/core/models/user.model';
import { AuthService } from 'ClientApp/app/core/services/auth.service';
import { GlobalService } from 'ClientApp/app/core/services/global.service';
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


    registerForm: FormGroup;
    loading = false;
    submitted = false; 
     
    userData = new User(); 
    user: any;

    showSpinner: boolean = false;

    public classReference = AppComponent;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private datePipe: DatePipe,
        private _registerService: AuthService,
        private _globalService: GlobalService,
       
        
        ) { }

    ngOnInit() { 
        this.initForm(); 
    }

    // convenience getter for easy access to form fields
    initForm() {
        this.registerForm = this.formBuilder.group({ 
            name: ['', Validators.required],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]], 
        });
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
      
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;

        this.prepareUser();
        this.showSpinner = true;
        this._registerService.register(this.userData).subscribe(resp => {
            //console.log(resp);
            this.user = resp.success;

            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.showSpinner = false;
            localStorage.setItem('isLoggedIn', "true");
            this.router.navigate(["tasks"]);
            this._globalService.toastrSuccess("Account Created Successfully");

           
        }, error => {
            this.showSpinner = false;
            this._globalService.toastrError(error.error);
        });
    }
    prepareUser() {
        const controls = this.registerForm.controls;
        this.userData.name = controls['name'].value;
        this.userData.password = controls['password'].value;
        this.userData.email = controls['email'].value; 

    } 
     

}
