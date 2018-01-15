import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrls: ['./restcall.component.css']
})
export class RestcallComponent implements OnInit {

  apiRoot: string = "http://httpbin.org";
  constructor(private http : Http) { }
  body:any;

  ngOnInit() {
  }
  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res => this.responseView(res));

  }

  responseView(res){
    console.log(res);
    console.log(res._body);
  }

  doPOST() {
    console.log("POST");
  }

  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/post`;
   //this.http.post(url,this.body).subscribe(res=>console.log(res));
    this.http.post(url,this.body).toPromise().then(res=>this.responseView(res)).catch(res=>console.log("error"));
    console.log("after this");
  }




  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }
}
