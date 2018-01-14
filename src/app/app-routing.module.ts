import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import{RestcallComponent} from './restcall/restcall.component'


const routes: Routes=[
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about/:id',
        component: AboutComponent
    },{
        path:'rest',
        component: RestcallComponent

    }
   
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


}
  