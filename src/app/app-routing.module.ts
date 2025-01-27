import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { ProductsComponent } from './component/products/products.component';
// import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { TheoryComponent } from './component/theory/theory.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { ProdFormComponent } from './component/prod-form/prod-form.component';
import { UserFormComponent } from './component/user-form/user-form.component';

const routes: Routes = [
  // define the routes for the application using the Routes array
  {
    path: '', // default route
    component: HomeComponent, // component to render when the path is matched
    title: 'Home', // title of the route
  },
  {
    path: 'home', // http://localhost:4200/home
    component: HomeComponent, // component to render when the path is matched
    title: 'Home', // title of the route
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent, // component to render when the path is matched
    title: 'users', // title of the route
  },
  {
    path: 'users/userForm', // http://localhost:4200/users
    component: UserFormComponent, // component to render when the path is matched
    title: 'Add users Form', // title of the route
  },
  {
    path: 'users/:id', // http://localhost:4200/users/123 // here we use params where params change dynamically and it used : to define the params
    component: UserInfoComponent, // component to render when the path is matched
    title: 'userInfo', // title of the route
  },
  {
    path: 'users/:id/userForm', // http://localhost:4200/users/123 // here we use params where params change dynamically and it used : to define the params
    component: UserFormComponent, // component to render when the path is matched
    title: 'Edit User Form', // title of the route
  },
  {
    path: 'products', // http://localhost:4200/products
    component: ProductsComponent, // component to render when the path is matched
    title: 'products', // title of the route
  },
  {
    path: 'products/prodForm', // http://localhost:4200/products
    component: ProdFormComponent, // component to render when the path is matched
    title: 'Add products Form', // title of the route
  },
  {
    path: 'products/:id', // http://localhost:4200/products
    component: ProductdetailsComponent, // component to render when the path is matched
    title: 'productsdetails', // title of the route
  },
  {
    path: 'products/:id/prodForm', // http://localhost:4200/products
    component: ProdFormComponent, // component to render when the path is matched
    title: 'Edit products details', // title of the route
  },
  {
    path: 'theory', // http://localhost:4200/theory
    component: TheoryComponent, // component to render when the path is matched
    title: 'theory', // title of the route
  },
  // {
  //   path: '**', // wildcard route to match any path that is not defined
  //   component: PagenotfoundComponent, // component to render when the path is matched
  //   title: 'Page Not Found', // title of the route
  // },
  // {
  //   path: 'pagenotfound', // http://localhost:4200/pagenotfound or any invalid path that is not defined
  //   component: PagenotfoundComponent, // component to render when the path is matched
  //   title: 'Page Not Found', // title of the route
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // configure the router at the application's root level i.e app.module.ts
  exports: [RouterModule], // export the RouterModule so it can be used throughout the application
})
export class AppRoutingModule {}
