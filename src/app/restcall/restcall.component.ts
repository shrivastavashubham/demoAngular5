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

  ngOnInit() {
  }
  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res => console.log(res.text()))
  }

  doPOST() {
    console.log("POST");
  }

  doPUT() {
    console.log("PUT");
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