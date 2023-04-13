import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    NavbarComponent
  ],
  declarations: [NavbarComponent],
  providers: [],
})
export class SharedModule { }
