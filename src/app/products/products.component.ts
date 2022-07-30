import { GetAllProductsService } from '../get-all-products.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
@NgModule({
  imports: [
   OwlModule]
})
export class ProductsComponent implements OnInit {

  products;
  constructor(private service : GetAllProductsService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(
      Response => {
        this.products = Response;
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }

}

