import { GetAllProductsService } from './../get-all-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products
  data = []
  constructor(private service : GetAllProductsService) { }

  ngOnInit() {
  }

}
