import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Welcome to Angular';
    subtitle = '.NET Core + Angular CLI v7 + Bootstrap & FontAwesome + Swagger Template';
    static textDir = 'RTL';
    public classReference = AppComponent;
   // static isLogedIn: boolean = false;
    constructor(
       
    ) {

    }
  
    
}
