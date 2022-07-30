import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class FilterCategoryService {

  constructor(private service:HttpClient) { }

  getAllFilterCategory(){
    let filtercategory=this.service.get(paths.filtercategory);
    return filtercategory;
  }
}
