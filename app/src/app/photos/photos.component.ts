import { Component, OnInit } from '@angular/core';

import { PhotosService } from './services';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public photos: Array<{ url: string }>;
  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photos = [];
    this.getPhotos();
  }

  getPhotos(): void {
    this.photosService.getPhotos().subscribe((res: any) => this.photos = this.photos.concat(res));
  }

  addToFavorites(url: string): void {}
}
