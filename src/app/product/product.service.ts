import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SystemService } from '../system/system.service';
import { Product } from './product.class';
import { JsonResponse } from '../util/json-reponse.class';

const url = 'http://localhost:54401/api/Products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + "List") as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + "Get/" + id) as Observable<JsonResponse>;
  }
  create(product: Product): Observable<JsonResponse> {
    return this.http.post(url + "Create", product) as Observable<JsonResponse>;
  }
  change(product: Product): Observable<JsonResponse> {
    return this.http.post(url + "Change", product) as Observable<JsonResponse>;
  }
  remove(product: Product): Observable<JsonResponse> {
    return this.http.post(url + "Remove", product) as Observable<JsonResponse>;
  }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }
}
