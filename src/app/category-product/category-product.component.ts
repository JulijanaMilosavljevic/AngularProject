import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from './../get-all-products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})


export class CategoryProductComponent implements OnInit {
  category
  meals
  categories=[];
  constructor(private service: GetAllProductsService, private http: HttpClient, private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe((params : Params) => {
      this.category = this.route.snapshot.params["category"]
    });
  }

brojac=0;
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      // do your task for before route

      return false;
    }
    this.service.getAllProducts().subscribe(
      Response => {
        this.meals = Response;
        for(let i=0; i<this.meals.length; i++){
          if(this.meals[i].category == this.category){
            this.categories[this.brojac] = this.meals[i]
            this.brojac++;
          }
        }
        console.log(this.category)
        console.log(this.categories)

      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }

}
