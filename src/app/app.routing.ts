import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";

const APP_ROUTING : Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'products', component : ProductsComponent}
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTING);