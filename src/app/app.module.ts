import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CommonModule} from '@angular/common';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {DataService} from './data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RestcallComponent } from './restcall/restcall.component';
import {NgxPopupModule} from 'ngx-popups';
import {MatSelectModule } from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import{PopupComponent} from './popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RestcallComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressBarModule,
MatRadioModule,
MatDialogModule
  ],
  providers: [DataService,NgxPopupModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
