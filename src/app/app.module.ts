import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { UsersComponent } from './component/users/users.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { TheoryComponent } from './component/theory/theory.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { ProdFormComponent } from './component/prod-form/prod-form.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    NavbarComponent,
    PagenotfoundComponent,
    TheoryComponent,
    UserInfoComponent,
    ProductdetailsComponent,
    ProdFormComponent,
    UserFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
