import { Component, OnInit } from '@angular/core'; 
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
   
    public classReference = AppComponent;
     
    
    constructor( 
    ) { }

    ngOnInit() {
        
  }
    

    test() { 

        let u = JSON.parse(localStorage.getItem('currentUser'));
        console.log(u.token);
    }

    isLogged() {

        if (localStorage.getItem('isLoggedIn') == "true") {
            return true;
        }
        return false;
    }
}
