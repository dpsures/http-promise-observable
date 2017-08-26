import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";
import { User } from "./users";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promiseData : Array<any>;
  promiseUser : Array<User>;

  constructor(private _service : HomeService) { }

  ngOnInit() {
    this._service.getHomePromiseBased().then (data => {
      this.promiseData = data;
    });

    this._service.getPromiseUserArray().then(data => {
      this.promiseUser = data;
    });
  }

}
