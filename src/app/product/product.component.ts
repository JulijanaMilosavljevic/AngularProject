import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetAllProductsService } from './../get-all-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  SlideOptions = { items: 1, dots: true, nav: false };
  CarouselOptions = { items: 3, dots: true, nav: false };
  id
  products
  product
  constructor(private service: GetAllProductsService, private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((params : Params) => {
      this.id = +this.route.snapshot.params["id"]
    })
  }

  ngOnInit() {
    this.service.getAllProducts().subscribe(
      Response => {
        this.products = Response;
        for(let i=0; i<this.products.length; i++){
          if(this.products[i].id == this.id){
            this.product = this.products[i]
            console.log(this.product)
            break;
          }
        }
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }




}
