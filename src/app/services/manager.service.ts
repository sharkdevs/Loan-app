import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  base_url = 'https://loan-app-backend.herokuapp.com/api/v1';
  constructor(private http: HttpClient) { }

  getOfficers() {
    return this.http.get(`${this.base_url}/managers`);
  }
}
