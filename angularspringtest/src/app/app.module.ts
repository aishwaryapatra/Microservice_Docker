import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestingService} from'../app/testing.service';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
