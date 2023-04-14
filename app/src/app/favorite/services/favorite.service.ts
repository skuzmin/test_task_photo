import { Injectable } from '@angular/core';

import { PHOTOS } from '../constants';
import { Photo } from 'src/app/shared/models';

@Injectable()
export class FavoriteService {
  private photos: Array<Photo>;
  constructor() {
    this.initPhotos();
  }

  initPhotos(): void {
    try {
      const data = JSON.parse(localStorage.getItem(PHOTOS)!);
      this.photos = data || [];
    } catch (e: unknown) {
      this.photos = [];
    }
  }

  getPhotos(): Array<Photo> {
    return this.photos;
  }

  getPhotoById(id: string): Photo {
    return this.photos.find((p: Photo) => p.id === id);
  }

  savePhoto(photo: Photo): void {
    this.photos.push(photo);
    localStorage.setItem(PHOTOS, JSON.stringify(this.photos));
  }

  removePhoto(photo: Photo): void {
    this.photos = this.photos.filter((p: Photo) => p.id === photo.id);
    localStorage.setItem(PHOTOS, JSON.stringify(this.photos));
  }

  isPhotoExist(photo: Photo): boolean {
    return this.photos.some((p: Photo) => p.id === photo.id);
  }
}