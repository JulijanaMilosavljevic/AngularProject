import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularProjekat';
  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true };
}
