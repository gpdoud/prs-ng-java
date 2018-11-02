import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reqline } from './reqline.class';
import { JsonResponse } from '../util/json-reponse.class';

const url = 'http://localhost:54401/api/RequestLines/';

@Injectable({
  providedIn: 'root'
})
export class ReqlineService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + "List") as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + "Get/" + id) as Observable<JsonResponse>;
  }
  create(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(url + "Create", reqline) as Observable<JsonResponse>;
  }
  change(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(url + "Change", reqline) as Observable<JsonResponse>;
  }
  remove(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(url + "Remove", reqline) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
