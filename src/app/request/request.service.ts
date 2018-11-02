import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Request } from './request.class';
import { JsonResponse } from '../util/json-reponse.class';

const url = 'http://localhost:54401/api/Requests/';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + "List") as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + "Get/" + id) as Observable<JsonResponse>;
  }
  create(request: Request): Observable<JsonResponse> {
    return this.http.post(url + "Create", request) as Observable<JsonResponse>;
  }
  change(request: Request): Observable<JsonResponse> {
    return this.http.post(url + "Change", request) as Observable<JsonResponse>;
  }
  remove(request: Request): Observable<JsonResponse> {
    return this.http.post(url + "Remove", request) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
