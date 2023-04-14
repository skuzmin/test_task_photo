import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ToastService } from './components/toast/toast.service';
import { ToastComponent } from './components/toast/toast.component';
import { MaterialModule } from './material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    NavbarComponent,
    MaterialModule,
    ConfirmationDialogComponent,
    GalleryComponent
  ],
  declarations: [NavbarComponent, GalleryComponent, ToastComponent, ConfirmationDialogComponent],
  providers: [ToastService]
})
export class SharedModule { }
