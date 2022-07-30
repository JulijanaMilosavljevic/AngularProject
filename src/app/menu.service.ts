import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private service:HttpClient) { }

  getAllMenues(){
    let menu=this.service.get(paths.menu);
    return menu;
  }
}
