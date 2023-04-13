import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosComponent } from './photos.component';
import { AppRoutes } from '../shared/constants';

export const routes: Routes = [
  { path: AppRoutes.Photos, component: PhotosComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }