import { Component, HostListener, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { PhotosService } from './services';
import { FavoriteService } from '../favorite/services';
import { Photo } from '../shared/models';
import { ToastService } from '../shared/components/toast/toast.service';
import { ToastTypes } from '../shared/components/toast/toast.constant';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public photos: Array<Photo>;
  public isLoading: boolean;
  constructor(private photosService: PhotosService, private favoriteService: FavoriteService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.photos = [];
    this.getPhotos();
  }

  getPhotos(): void {
    this.isLoading = true;
    this.photosService.getPhotos()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((res: any) => this.photos = this.photos.concat(res));
  }

  addToFavorites(photo: Photo): void {
    if (this.favoriteService.isPhotoExist(photo)) {
      this.toastService.showNotification({type: ToastTypes.Error, text: 'This photo has been already added to Favorites'});
    } else {
      this.favoriteService.savePhoto(photo);
      this.toastService.showNotification({type: ToastTypes.Success, text: 'Photo has been added to Favorites'});
    }
  }

  @HostListener('window:scroll', ['$event'])
  addMorePhotos(event: Event): void {
    const { scrollHeight, scrollTop, clientHeight } = (event.target as any).scrollingElement;
    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1 && !this.isLoading) {
      this.getPhotos();
    }
  }
}
