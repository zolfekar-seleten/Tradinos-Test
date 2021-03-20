import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
import { Router } from '@angular/router';
import { AppComponent } from '../../../../app/app.component';


@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
    language: string;
    public classReference = AppComponent;
    constructor(
        public dialog: MatDialog,
        private router: Router,) { }

    ngOnInit() {
        if (AppComponent.textDir = 'RTL') this.language = 'AR';
        else this.language = 'EN';
  }
    changeLanguage() {
        if (this.language == 'EN') {
            AppComponent.textDir = 'RTL';
            this.language = 'AR';
            //console.log(AppComponent.textDir);
        }

        else {
            AppComponent.textDir = 'LTR';
            this.language = 'EN';
            //console.log(AppComponent.textDir);
        }
    }

    //openDialog(): void {
    //    const dialogRef = this.dialog.open(SignInComponent, {
    //        width: '450px',

    //    });

    //    dialogRef.afterClosed().subscribe(result => {
    //        console.log('The dialog was closed');

    //    });
    //}


    logOut() {
        //   console.log(localStorage.getItem('currentUser'));
        this.router.navigate(["home"]);
        localStorage.removeItem('currentUser');
        localStorage.setItem('isLoggedIn', "false");
        // AppComponent.isLogedIn = false;

        // ConstantsService.logedInUser = new User();
        console.log("user log out");
        //   console.log(localStorage.getItem('currentUser'));
        // this.store.dispatch(new Logout());
    }

    isLogged() {

        if (localStorage.getItem('isLoggedIn') == "true") {
            return true;
        }
        return false;
    }
}
