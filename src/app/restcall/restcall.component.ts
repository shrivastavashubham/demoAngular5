import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrls: ['./restcall.component.css']
})
export class RestcallComponent implements OnInit {

  apiRoot: string = "http://localhost:8080";
  constructor(private http : Http) { }
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
  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/showAll`;
    this.http.get(url).subscribe(res => this.responseView(res));

  }
  countItem(){
    this.customers=[];
    let url = `${this.apiRoot}/showAll`;
    this.http.get(url).subscribe(res => this.responseView(res));
    
  }

  responseView(res){
    console.log(JSON.parse(res._body));
    this.customers=JSON.parse(res._body);
    
    
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    //this.http.post(url,this.body).subscribe(res=>console.log(res));
    console.log(this.body.shubham);
     this.http.post(url,this.body).toPromise().then(res=>this.responseView(res)).catch(res=>console.log("error"));
     console.log("after this");
  }

  deleteItem(i){
    console.log(i);
    let url = `${this.apiRoot}/deleteCustomer/${i}`;
    
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
    console.log(this.body);
    let url = `${this.apiRoot}/addCustomer`;
    this.http.post(url,this.body).subscribe(res=>console.log());
    this. countItem();

  }
}
