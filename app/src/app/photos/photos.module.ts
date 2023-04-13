import { NgModule } from '@angular/core';

import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [PhotosRoutingModule, SharedModule],
  exports: [],
  declarations: [PhotosComponent],
  providers: [],
})
export class PhotosModule { }
