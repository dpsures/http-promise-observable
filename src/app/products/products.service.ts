import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./products";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private _http : HttpClient) { }

  getProductObservable() : Observable<any> {
    return this._http.get('assets/products.json');
  }

  getProductObservableArray() : Observable<Product[]> {
    return this._http.get('assets/products.json')
    .map(data => data as Product[]);
  }
}
