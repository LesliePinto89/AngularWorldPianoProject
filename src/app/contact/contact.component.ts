import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contactForm: FormGroup;
  control: FormControl;

  constructor(private fb: FormBuilder) {
    }

  ngOnInit() {
    this.control = this.fb.control('', Validators.required);

    this.contactForm =  this.fb.group({
      name: ['',  [Validators.required, Validators.minLength(3)]],
      email: ['',  Validators.required],
      message: ['',  Validators.required]
      });
  }

  // onSubmit(form: FormGroup) { 
  //   console.log('Your form data : ', form.value);
  // } 

}
