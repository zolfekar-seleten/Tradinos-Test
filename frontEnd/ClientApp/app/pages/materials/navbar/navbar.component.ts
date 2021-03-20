import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
import { Router } from '@angular/router';
import { AppComponent } from '../../../../app/app.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    language: string;
    public classReference = AppComponent;
    constructor(
        public dialog: MatDialog,
        private router: Router,
    ) {

    
    }

    ngOnInit() {
        if (AppComponent.textDir = 'RTL') this.language = 'AR';
        else this.language = 'EN';
  }
    changeLanguage() {
        if (this.language == 'EN') {
            AppComponent.textDir = 'RTL';
            this.language = 'AR'; 
        }

        else {
            AppComponent.textDir = 'LTR';
            this.language = 'EN'; 
    }
    }

   


    logOut() { 
        this.router.navigate(["home"]);
        localStorage.removeItem('currentUser');
        localStorage.setItem('isLoggedIn', "false"); 
        console.log("user log out");
    }

    isLogged() {

        if (localStorage.getItem('isLoggedIn') == "true") {
            return true;
        }
        return false;
    }
}
