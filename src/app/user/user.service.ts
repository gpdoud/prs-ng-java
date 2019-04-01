import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SystemService } from '../system/system.service';
import { User } from './user.class';
import { JsonResponse } from '../util/json-reponse.class';

// const url = 'http://purchase-request-server.azurewebsites.net/api/Users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;

  login(username: string, password: string): Observable<JsonResponse> {
    return this.http.get(`${this.url}Login/${username}/${password}`) as Observable<JsonResponse>;
  }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url + 'List') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(this.url + `Get/${id}`) as Observable<JsonResponse>;
  }
  add(user: User): Observable<JsonResponse> {
    return this.http.post(this.url + "Create", user) as Observable<JsonResponse>;
  }
  change(user: User): Observable<JsonResponse> {
    return this.http.post(this.url + "Change", user) as Observable<JsonResponse>;
  }
  remove(user: User): Observable<JsonResponse> {
    return this.http.post(this.url + "Remove", user) as Observable<JsonResponse>;
  }

  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) { 
    this.url = `${this.sys.ServerUrl}/api/Users/`;
  }
}
