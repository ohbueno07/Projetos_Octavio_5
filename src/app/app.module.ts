import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './service/home.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
