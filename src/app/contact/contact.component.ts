import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger("showHide", [
      state('true', style({display: 'block'})),
      state('false', style({display: 'none'}))
    ])
  ]
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;
  isMessageDisplayed: boolean = false;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      fullName : new FormControl("", [Validators.required, Validators.pattern('^[A-ZŠĐČĆŽ][a-zšđčćž]{1,12}\\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,12}$')]),
      email : new FormControl("", [Validators.required, Validators.email]),
      subject : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      message : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(300)])
    })
  }



  onFormSubmit(){
    this.isMessageDisplayed = true;
    this.contactForm.reset();
  }

}
