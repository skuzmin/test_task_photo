import { Injectable } from '@angular/core';

import { PHOTOS } from '../constants';

@Injectable()
export class FavoriteService {
  private photos: Array<string>;
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

  getPhotos(): Array<string> {
    return this.photos;
  }

  savePhoto(url: string): void {
    this.photos.push(url);
    localStorage.setItem(PHOTOS, JSON.stringify(this.photos));
  }

  removePhoto(url: string): void {
    this.photos = this.photos.filter((p: string) => p === url);
    localStorage.setItem(PHOTOS, JSON.stringify(this.photos));
  }

  isPhotoExist(url: string): boolean {
    return this.photos.some((p: string) => p === url);
  }
}