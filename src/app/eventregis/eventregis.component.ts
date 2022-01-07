import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-eventregis',
  templateUrl: './eventregis.component.html',
  styleUrls: ['./eventregis.component.css']
})
export class EventregisComponent{
  //events = new FormControl();

  eventlist: string[] = ['Paper Presentation','Project Presentation','Coding and Debugging','Quizmasters','IPL auction','Flip Flop'];
  regisform= new FormGroup({
    Name :new FormControl('',[Validators.required,Validators.minLength(4)]),
    Phoneno :new FormControl('',[Validators.required,Validators.minLength(10)]),
    Email : new FormControl('',[Validators.required,Validators.email]),
    Rollno :new FormControl('',Validators.required),
    Dept :new FormControl('',Validators.required),
    Events:new FormControl(null,Validators.required)
  }); 
  constructor(private _regis:RegisService) { }
  Submit(){
    console.log(this.regisform.value);
    this._regis.eventregis(this.regisform.value).subscribe(
      response  => console.log('Success',response),
      error  => console.log('Error',error),
      );
      this.regisform.reset();
      alert("Registration Successful!")
  }
  
  get Email(){
    return this.regisform.get('Email');
  }
  get Name(){
    return this.regisform.get('Name');
  }get Phoneno(){
    return this.regisform.get('Phoneno');
  }
  get Rollno(){
    return this.regisform.get('Rollno');
  }
  get Dept(){
    return this.regisform.get('Dept');
  }
  get Events(){
    return this.regisform.get('Events');
  }
}
