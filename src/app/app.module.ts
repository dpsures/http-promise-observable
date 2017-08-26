import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { AppRoutingModule } from "./app.routing";
import { HomeService } from "./home/home.service";
import { ProductsService } from "./products/products.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, HttpClientModule
  ],
  providers: [HomeService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
