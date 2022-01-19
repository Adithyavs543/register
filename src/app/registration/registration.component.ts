import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  registrationForm: any;


  
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      "firstName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "secondName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "emailId": new FormControl(null, [Validators.required, Validators.email]),
      "phoneNumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])

    });
  }



  submitData() {
    console.log(this.registrationForm.value);

    if (this.registrationForm.value) {
      alert(`Thank You ${this.registrationForm.value.firstName}`)
    }

  }




  get firstname() {
    return this.registrationForm.get('firstName')
  }
  get secondname() {
    return this.registrationForm.get('secondName')
  }
  get emailid() {
    return this.registrationForm.get('emailId')
  }
  get phonenum() {
    return this.registrationForm.get('phoneNumber')
  }




}
