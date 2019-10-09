import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  base_url = 'https://loan-app-backend.herokuapp.com/api/v1/';

  getFarmers(){
    return this.http.get(`${this.base_url}farmers`);
  }
}
