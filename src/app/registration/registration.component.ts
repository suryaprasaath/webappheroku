import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { RegisService } from '../regis.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  
})

export class RegistrationComponent {
  email: any;
  Form= new FormGroup({
    Name :new FormControl('',[Validators.required,Validators.minLength(4)]),
    Phoneno :new FormControl('',[Validators.required,Validators.minLength(10)]),
    Password :new FormControl('',[Validators.required,Validators.minLength(8)]),
    Email : new FormControl('',[Validators.required,Validators.email])
  }); 
  http:any;showMsg: boolean = false;
  constructor(private _regis:RegisService){};
Submit(){
  console.log(this.Form.value);
  this.email=this.Form.value.Email;
  this._regis.registration(this.Form.value).subscribe(
    response  => console.log('Success',response),
    error  => console.log('Error',error),
    );
    this.showMsg= true;
    this.Form.reset();
    alert("Registration Successful! Please Proceed to login")
}

get Email(){
  return this.Form.get('Email');
}
get Password(){
  return this.Form.get('Password');
}get Name(){
  return this.Form.get('Name');
}get Phoneno(){
  return this.Form.get('Phoneno');
}

}


