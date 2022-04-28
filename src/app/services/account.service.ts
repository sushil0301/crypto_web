import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:1111/api';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAll(data): Observable<any> {
    return this.http.post(baseUrl + '/findAll', data);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl + '/create', data);
  }
}
