import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';
import { User } from "./users";

@Injectable()
export class HomeService {

  constructor(private _http : HttpClient) { }

  getHomePromiseBased() : Promise<any> {
    return this._http.get('assets/home.json').toPromise();
  }

  getPromiseUserArray() : Promise<User[]> {
    return this._http.get('assets/home.json').toPromise();
  }
}
