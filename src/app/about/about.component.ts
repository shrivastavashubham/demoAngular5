import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import {Router} from '@angular/router'
import {DataService} from '../data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  value: string ='this is default value';
  goals:any;

  constructor(private route : ActivatedRoute,private router : Router, private _data: DataService) {
    this.route.params.subscribe(res=> console.log(res.id));
    this.route.params.subscribe(res=> this.value=res.id);
   }

  ngOnInit() {
    this._data.goals.subscribe(res=> this.goals= res);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
