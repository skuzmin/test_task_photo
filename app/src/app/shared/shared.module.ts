import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';

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
    NavbarComponent,
    GalleryComponent
  ],
  declarations: [NavbarComponent, GalleryComponent],
  providers: [],
})
export class SharedModule { }
