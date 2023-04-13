import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FavoriteModule } from './favorite/favorite.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    PhotosModule,
    FavoriteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
