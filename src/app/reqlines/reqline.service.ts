import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SystemService } from '../system/system.service';
import { Reqline } from './reqline.class';
import { JsonResponse } from '../util/json-reponse.class';

// const url = 'http://localhost:54401/api/RequestLines/';

@Injectable({
  providedIn: 'root'
})
export class ReqlineService {

  url: string;

  list(): Observable<JsonResponse> {
    return this.http.get(this.url + "List") as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(this.url + "Get/" + id) as Observable<JsonResponse>;
  }
  create(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(this.url + "Create", reqline) as Observable<JsonResponse>;
  }
  change(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(this.url + "Change", reqline) as Observable<JsonResponse>;
  }
  remove(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(this.url + "Remove", reqline) as Observable<JsonResponse>;
  }

  constructor(    
    private sys: SystemService,
    private http: HttpClient
  ) { 
    this.url = `${this.sys.ServerUrl}/api/RequestLines/`;
  }
}
