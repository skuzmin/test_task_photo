import { NgModule } from '@angular/core';

import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PhotosService } from './services';

@NgModule({
  imports: [PhotosRoutingModule, SharedModule],
  exports: [],
  declarations: [PhotosComponent],
  providers: [PhotosService],
})
export class PhotosModule { }
