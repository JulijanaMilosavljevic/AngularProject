import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private services:MenuService) { }
  public menu:Menu[];
  ngOnInit() {
    this.services.getAllMenues().subscribe(
      (Response:Menu[] )=> {
        this.menu = Response;
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }

}
