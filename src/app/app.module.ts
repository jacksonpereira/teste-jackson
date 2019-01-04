import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page2Component,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
