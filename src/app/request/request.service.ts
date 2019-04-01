import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SystemService } from '../system/system.service';
import { Request } from './request.class';
import { JsonResponse } from '../util/json-reponse.class';

// const url = 'http://localhost:54401/api/Requests/';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string;

  review(id): Observable<JsonResponse> {
    return this.http.get(this.url + 'Review/' + id) as Observable<JsonResponse>;
  }
  reviews(userid): Observable<JsonResponse> {
    return this.http.get(this.url + "Reviewlist/" + userid) as Observable<JsonResponse>;
  }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url + "List") as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(this.url + "Get/" + id) as Observable<JsonResponse>;
  }
  create(request: Request): Observable<JsonResponse> {
    return this.http.post(this.url + "Create", request) as Observable<JsonResponse>;
  }
  change(request: Request): Observable<JsonResponse> {
    return this.http.post(this.url + "Change", request) as Observable<JsonResponse>;
  }
  remove(request: Request): Observable<JsonResponse> {
    return this.http.post(this.url + "Remove", request) as Observable<JsonResponse>;
  }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { 
    this.url = `${this.sys.ServerUrl}/api/Requests/`;
  }
}
