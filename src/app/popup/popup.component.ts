import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  
})
export class PopupComponent implements OnInit {

  name:string;
  names:string;
  age:string;
  sex:string;
  mobile:string;
  id:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data :any) { }

  ngOnInit() {
    this.name =this.data.name.firstName;
    this.names=this.data.name.lastName;
    this.age=this.data.name.age;
    this.sex= this.data.name.sex;
    this.mobile=this.data.name.mobile;
    this.id=this.data.name.id;
  }

}
