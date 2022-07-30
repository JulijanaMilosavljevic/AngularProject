import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../socialmedia.service';
import { SocialMedia } from '../socialmedia';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor(private services:SocialMediaService) { }
  public socialmedia:SocialMedia[];
  ngOnInit() {
    this.services.getAllSocialMedia().subscribe(
      (Response:SocialMedia[] )=> {
        this.socialmedia = Response;
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }

}
