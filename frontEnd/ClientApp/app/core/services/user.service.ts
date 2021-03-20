import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConstantsService } from './constants.service'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient,
        private _constansService: ConstantsService,
    ) { }

   
}
