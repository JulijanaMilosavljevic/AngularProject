import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {

  constructor(private service : HttpClient) { }

  getAllProducts(){
    var products = this.service.get(paths.products)
    return products;
  }
}

