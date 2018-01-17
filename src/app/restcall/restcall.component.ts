import { Component, OnInit, HostListener  } from '@angular/core';
import {Http} from '@angular/http'

import {PopupComponent} from '../popup/popup.component';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrls: ['./restcall.component.css']
})
export class RestcallComponent implements OnInit {

  apiRoot: string = "http://localhost:8080";
  constructor(private http : Http, public dialog: MatDialog) { }
 firstName: String="";
 lastName: String="";
 age:number;
 sex:string="";
 mobile:string;
  body:any;
  status: String="";
itemCount: number;
customers=[];

  ngOnInit() {
    this.countItem()
  }
  dialogClose1:any;

 

  countItem(){
    this.customers=[];
    let url = `${this.apiRoot}/showAll`;
    this.http.get(url).subscribe(res => this.responseView(res));
    
  }

  responseView(res){
    console.log(JSON.parse(res._body));
    this.customers=JSON.parse(res._body);
    
    
  }


  deleteItem(i){
    console.log(i);
    console.log(this.customers.find(item=>item.id==i));
    let url = `${this.apiRoot}/deleteCustomer/${i}`;
    this.customers=[];
    console.log(url);
    this.http.get(url).subscribe(res=>console.log(res));
    this.countItem();
  }

  addItem(){
    this.body={
      "firstName": this.firstName,
      "lastName": this.lastName,
      "age": this.age,
      "sex": this.sex,
      "mobile": this.mobile
    }
    this.customers=[];
    console.log(this.body);
    let url = `${this.apiRoot}/addCustomer`;
    this.http.post(url,this.body).subscribe(res=>console.log());
    this. countItem();
  }
  openDialog(i) {
    console.log(i);
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '150px',
      disableClose:false,
      backdropClass:'' ,
      hasBackdrop:true,
     autoFocus:true,
     
     data:{
       name:this.customers.find(item=>item.id==i)
     }
          });
  this.dialogClose1=dialogRef;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
