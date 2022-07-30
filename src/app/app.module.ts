import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenDescriptionPipe } from './shorten-description.pipe';
import { HeaderComponent } from './header/header.component';
import { FilterCategoryComponent } from './filtercategory/filtercategory.component';
import { SocialMediaComponent } from './socialmedia/socialmedia.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { OwlModule } from 'ngx-owl-carousel';

const appRoutes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "shop",
    component : ProductsComponent
  },
  {
    path : "products/:id",
    component : ProductComponent
  },
  {
    path : "category/:category",
    component : CategoryProductComponent,
  },
  {
    path : "**",
    redirectTo : ""
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    ShortenDescriptionPipe,
    HeaderComponent,
    MenuComponent,
    FilterCategoryComponent,
    SocialMediaComponent,
    CategoryProductComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule, OwlModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
