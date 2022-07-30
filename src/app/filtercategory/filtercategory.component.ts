import { Component, OnInit } from '@angular/core';
import { FilterCategory } from '../filtercategory';
import { FilterCategoryService } from '../filtercategory.service';

@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.component.html',
  styleUrls: ['./filtercategory.component.css']
})
export class FilterCategoryComponent implements OnInit {

  constructor(private services:FilterCategoryService) { }
  public filtercategory:FilterCategory[];
  ngOnInit() {
    this.services.getAllFilterCategory().subscribe(
      (Response:FilterCategory[] )=> {
        this.filtercategory = Response;
      }
      ,
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }

    )

  }
  refresh(): void {
    window.location.reload();
}



}
