

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConstantsService } from './constants.service'; 
import { Category } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    token: string = JSON.parse(localStorage.getItem('currentUser')).token;
    endPoint: string;
    options = {
        headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token
        })
    };

    constructor(
        private http: HttpClient,
        private _constants: ConstantsService,
    ) {
        this.endPoint = _constants.baseUrl + "categories"
    }

    getAllCategories() {
        return this.http.get<any>(this.endPoint, this.options);
    }

    getTaskDetails(CategoryId) {
        return this.http.get<any>(this.endPoint + "/" + CategoryId, this.options);
    }

    createNewTask(category: Category) {
        return this.http.post<any>(this.endPoint,
            {
                "name": category.name,
                "color": category.color,
            }

            , this.options)
    }

}
