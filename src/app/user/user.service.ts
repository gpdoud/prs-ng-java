import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.class';
import { JsonResponse } from '../util/json-reponse.class';

const url = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + 'list') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'get/' + id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
