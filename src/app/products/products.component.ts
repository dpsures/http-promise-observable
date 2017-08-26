import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";
import { Product } from "./products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  observableData : any;
  observableArrayData : Product[];
  
  constructor(private _service : ProductsService) { }

  ngOnInit() {
    this._service.getProductObservable().subscribe(data => {
      this.observableData = data;
    });

    this._service.getProductObservableArray().subscribe(data => this.observableArrayData = data);
  }

}
