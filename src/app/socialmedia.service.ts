import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(private service:HttpClient) { }

  getAllSocialMedia(){
    let socialmedia=this.service.get(paths.socialmedia);
    return socialmedia;
  }
}
