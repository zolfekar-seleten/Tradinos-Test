import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private _constants: ConstantsService,
        private httpClient: HttpClient,
    ) { }

    login(email, password) {

        return this.httpClient.post<any>(this._constants.baseUrl + "login", {
            "email": email,
            "password": password,

        });
    }

    register(user: User) {

        return this.httpClient.post<any>(this._constants.baseUrl + "register", {
            "name": user.name,
            "password": user.password,
            "email": user.email,
            "confirm_password": user.password
        });
    }
    
}
